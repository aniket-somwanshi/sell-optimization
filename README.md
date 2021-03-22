

# Sell Optimization
## 1. Introduction to use case

[![Watch the video](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/thumbnail_intro.png)](https://www.youtube.com/watch?v=PZDPq7UBMY8)

Consider the use case of Ebay, an E-commerce platform for
buying and selling products. The community relies heavily
on C2C. Although, “selling on Ebay" is not yet in the
comfort zone of Ebay users. Mainly because of hesitance on
when to sell what. Selling a pre-owned product today, may
result in loss due to increase in it’s price 3 years
later. Conversely, not selling a product in it’s peak
time, may result in a consequent loss.

The proposed solution for the use case is **Sell
Optimization**. Users are informed about the Optimal year
and month to sell a particular pre-owned product, so as to
maximise possible profit & to retain the C2C community.

## 2. Approach to Solution

[![Watch the video](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/thumbnail_exp.png)](https://www.youtube.com/watch?v=Cs3Y_mZ34iE)
Consider the current year to be 2019. The general trend
of the sales data is slightly increasing. Case 1: If we
decide to sell the product at this stage, we would incur
a loss because in 2021 the graph is increasing
furthermore. Case 2: the trend is decreasing and if we
sell at this point, it will be the optimal time.
![Approach](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/so_report_1.png)

Here in case 2: Although the trend is decreasing up until
2021, the trend reaches peak in 2023. As it turns out,
waiting until 2023 is the optimal move.
Thus, we need an algorithm to figure out the optimal sell
time over a stretch of a period rather than instantaneously. 
![Approach](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/so_report_2.png)

The data for the given problem is a time-series of sales up
until current year. 2 feeder models (LSTM) for optimal_year
and optimal_month forecasting, are fed to the algorithm.

## 3. High Level Architecture
![Architecture](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/so_architecture.png)

## 4. User Interface
![UI](https://github.com/aniket-somwanshi/sell-optimization/blob/master/Resources/ui_so_6.png)



# Technologies used
- **Specifications**: [Python 3](https://www.python.org/download/releases/3.0/), [Flask 1.1](https://flask.palletsprojects.com/en/1.1.x/), [Angular 7.0](https://angular.io/)
- **Platform** (training): [Google Colab](https://colab.research.google.com/)
- **Open source libraries**: [Keras](https://keras.io/getting_started/), [Sklearn](https://scikit-learn.org/)
