# Sell Optimization
###### Customer retention: Users are informed about the optimal year and the optimal month to sell a particular pre-owned product, so as to maximize the profit on the user's end and to retain the C2C community on Ebay.
## Environment Setup
The models are built on the [Google Colab](https://colab.research.google.com/) platform. The following setup will let you reproduce the whole directory and get it up and running.
1. Clone the repository.
2. Open [Google Drive](http://drive.google.com/).
3. Create new Folder `Inframind`.
4. Upload the repository contents inside the folder.
5. Go to [Google Colab](https://colab.research.google.com/).
6. Mount Google Drive.

![Paths](https://github.com/aniket-somwanshi/inframind-enterprise-ai/blob/master/Resources/md_paths.png)
The paths defined throughout the repository are now consistent with your Google Drive directory as shown in an example above.

## 1. Introduction to use case
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
Consider the current year to be 2019. The general trend
of the sales data is slightly increasing. Case 1: If we
decide to sell the product at this stage, we would incur
a loss because in 2021 the graph is increasing
furthermore. Case 2: the trend is decreasing and if we
sell at this point, it will be the optimal time.
![Approach](https://github.com/aniket-somwanshi/inframind-enterprise-ai/blob/master/Resources/so_report_1.png)

Here in case 2: Although the trend is decreasing up until
2021, the trend reaches peak in 2023. As it turns out,
waiting until 2023 is the optimal move.
Thus, we need an algorithm to figure out the optimal sell
time over a stretch of a period rather than instantaneously. 
![Approach](https://github.com/aniket-somwanshi/inframind-enterprise-ai/blob/master/Resources/so_report_2.png)

The data for the given problem is a time-series of sales up
until current year. 2 feeder models (LSTM) for optimal_year
and optimal_month forecasting, are fed to the algorithm.

## 3. High Level Architecture
![Architecture](https://github.com/aniket-somwanshi/inframind-enterprise-ai/blob/master/Resources/so_architecture.png)

## 4. User Interface
![UI](https://github.com/aniket-somwanshi/inframind-enterprise-ai/blob/master/Resources/ui_so_6.png)
