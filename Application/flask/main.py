from flask import Flask, jsonify, request
from flask_restful import Api, Resource
import pandas as pd
from tensorflow import keras
from datetime import datetime
import numpy as np
import sys

app = Flask(__name__)
api = Api(app)
	
def create_dataset(X, y, time_steps=1):
    Xs, ys = [], []
    for i in range(len(X) - time_steps):
        v = X.iloc[i:(i + time_steps)].values
        Xs.append(v)        
        ys.append(y.iloc[i + time_steps])
    return np.array(Xs), np.array(ys)


@app.route("/predict", methods=["POST"])
def predict():
	data = request.json
	print("input_data", data, file= sys.stdout)
	#return jsonify({"month": str(data)})

	#curr date
	curr_date = datetime.strptime(data['curr_date'], '%Y-%m-%d').date()
	#buy date
	buy_date = datetime.strptime(data['date'], '%Y-%m-%d').date()

	#check if current year is optimal or not

	#check if current year is the expiration year

	is_optimal_year = False
	#if product is not a collectible ie it has expiration period
	if(data['type']!='vintage_watches'):
		# the product is expirable
		print("buy date year + 4 ", buy_date.year + 4, "curr_date.year",curr_date.year, file = sys.stdout)
		critical_year = buy_date.year + 4
		if (curr_date.year >= critical_year):
			
			is_optimal_year = True

	#import model for current product
	optimal_year_model = keras.models.load_model("models/"+data['type']+"_optimal_year.h5")

	#load dataset
	df = pd.read_csv("datasets/"+data['type']+"_sales.csv", parse_dates=['Month'], index_col="Month")
	df = df.resample('Y').sum()

	# test split
	split_date = pd.datetime(curr_date.year-3,1,1)
	test = df.loc[split_date:]

	#create dataset for test
	time_steps = 3
	X_test, y_test = create_dataset(test, test.sales, time_steps)

	#predict
	y_pred = optimal_year_model.predict(X_test)
	# print(y_pred)

	# calculate average sales in previous three years
	if(data['type']=='vintage_watches'):
		#collectibles have period of 5 years
		average = df.loc[datetime(year = curr_date.year -5, month =12, day = 31) : datetime(year = curr_date.year -1,month = 12, day= 31)].sum()/5
	else:
		average = df.loc[datetime(year = curr_date.year -3, month =12, day = 31) : datetime(year = curr_date.year -1,month = 12, day= 31)].sum()/3

	avg = float(str(average).split()[1])

	print("average!", avg, file=sys.stdout)
	print("y_pred[0][0]", y_pred[0][0], file=sys.stdout)
	
	if(y_pred[0][0] <= avg):
		is_optimal_year = True

	print("is_optimal_year", is_optimal_year, "prod", data['type'], file = sys.stdout)
	# if year is optimal, find optimal month
	optimal_month = -1 
	if (is_optimal_year==True):
		df = pd.read_csv("datasets/"+data['type']+"_sales.csv", parse_dates=['Month'], index_col="Month")
		
		#generate test data 
		test = df.loc[datetime(year = curr_date.year -2, month =12, day = 31) : datetime(year = curr_date.year ,month = 12, day= 31)]

		#create dataset for test
		time_steps = 12
		X_test, y_test = create_dataset(test, test.sales, time_steps)

		#get prediction for curr year
		#import model for current product
		optimal_month_model = keras.models.load_model("models/"+data['type']+"_optimal_month.h5")
		y_pred = optimal_month_model.predict(X_test)

		print("X_test", X_test, file = sys.stdout)
		print("y_test", y_test, file = sys.stdout)


		#get optimal month of the curr year
		print("array", y_pred, file = sys.stdout)

		optimal_month = np.argmax(y_pred, axis = 0)[0]

		print("res", optimal_month, file = sys.stdout)

		#optimal month is zero indexed

	return {'month':str(optimal_month)}


if __name__ == "__main__":
	app.run(debug=True)
