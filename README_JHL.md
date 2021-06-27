# US_Wildfire Segment 3

## Project Overview 
The topic of our analysis is wildfires across the United States. Wildfires inspired our team members because we lived in the Bay Area of California. Living through the rampant fires over the last several years, experiencing ashes raining from the sky, and unable to see the sun for days were very impactful. To know more about this topic and future potential wildfires, we want to see if it is possible to predict future fire sizes from past fire data. We chose a sub-sample from [1.88 Million US Fires]( https://www.kaggle.com/rtatman/188-million-us-wildfires) combined with historical weather and vegetation data from the website Kaggle. The question that we want to answer with this data is to determine at what accuracy if any, can we predict the class size of a fire.

***Sources***

***[U.S. Wildfire data (plus other attributes)]( https://www.kaggle.com/capcloudcoder/us-wildfire-data-plus-other-attributes?select=FW_Veg_Rem_Combined.csv)***

***[County data](https://geo.fcc.gov/api/census/)***
## Resources
We utilized Panda's profiling to visualize metadata of the original dataset. We then [removed nulls](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt1.ipynb), [checked for duplicates](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt2.ipynb), and [removed noncontributing data](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt3.ipynb). We used random forest classification model integrated with postgresSQL. Listed below are the numerous technology, programming language and tools we have utilized: 
- Jupyter Notebook 
- PostgresSQL 
- Flask app 
- Leaflet
- Heroku
- APIs
- Python
- HTML
- Javascript
- SQL
- Machine Learning Random Forest Classification

A copy of our presentation will be available on [google slides]( https://docs.google.com/presentation/d/1zNJLu_Os-ALgjHbccoEGw9cjZcJPYD_3G4ZGsKlYAwc/edit#slide=id.p).


## Machine Learning Model 
- Utilized Panda's profiling to visualize metadata of the original dataset. We removed nulls, checked for duplicates, and removed noncontributing data.
- Removed features after initial machine learning model due to a negative accuracy score of -117%. 
- Removed additional features to improve accuracy score.
- Elected random sampling for splitting, training, and testing dataset.
- Used Random Forest Machine Learning Model in lieu of using Decision Trees due to better performance. Limitations are greater time required for training as it combines a lot of decision trees to determine the class as well as requiring much computational power and resources as it builds numerous trees to combine their outputs. 
- Used Random Forest Classifier instead of Random Forest Regressor since the prediction will be categorical and not continuous.
- We found a useful article called ["Hyperparameter Tuning the Random Forest in Python"]( https://towardsdatascience.com/hyperparameter-tuning-the-random-forest-in-python-using-scikit-learn-28d2aa77dd74), that helped explain grid searches and the various hyperparameters that can be used for this model. 
- The initial accuracy score of the model was 91%. This was due to a high correlation between the feature of fire size and the dependent variable fire size class. 
- Changed features and hyperparameters to correct the high correlation. The new model predicts the fire size class with the accuracy score of 70%.

Model Progression: [Pt.1](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v1.ipynb), [Pt.2](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v2.ipynb), [Pt.3](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v3.ipynb), [Pt.4](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/randomforestclassifier_trial_and_error_91.ipynb), [Random Forest Classifier Final](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_model_wildfire_segment_2.ipynb)

## Database 
[Database connection](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_DB_Connect.ipynb)

[SQL database code](https://github.com/Ariannatopbjerg/US_Wildfire/tree/main/sql)

In the database connection code, you will see the creation of a new dataset for counties. We scraped this data from the [Federal Communications Commission]( https://geo.fcc.gov/api/census/) with our latitudes and longitudes from our Wildfire dataset. We then joined the two datasets together; shown below, using PostgreSQL as our database. We used SQLAlchemy for the connection string between the database and jupyter notebook. 

**ERD**

![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/ERD-Wildfire.png)

**Join Code**

![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/join_code.png)

**Join Output**

![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/join_outputdata.png)

## DashBoard
(Link to html)

✓ Data (images or report) from the machine learning task





