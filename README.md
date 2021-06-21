# US_Wildfire

# Segment 2

## Presentation 
We decided to analyze wildfires across the United States. The members of our team live or have lived in the Bay Area of California. A few years ago, when the fires were running rampant, we all experienced ashes raining from the sky and not being able to see the sun for days. This topic touches us personally and piques our interest. To know more about this topic and future potential wildfires, we want to see if it is possible to predict future fire sizes from past fire data. This dataset that we chose, is a sub-sample from [1.88 Million US Fires]( https://www.kaggle.com/rtatman/188-million-us-wildfires) combined with historical weather and vegetation data from the website Kaggle. The question that we want to answer with this data is to determine at what accuracy if any, can we predict the class of the fire size.

***Sources***

U.S. Wildfire data (plus other attributes). https://www.kaggle.com/capcloudcoder/us-wildfire-data-plus-other-attributes?select=FW_Veg_Rem_Combined.csv

County data. https://geo.fcc.gov/api/census/

### Description of the data exploration phase of the project
We utilized panda's profiling to visualize metadata of the original dataset. We then removed nulls, checked for duplicates, and removed noncontributing data, based on our machine learning model. We used random forest classification model. Extracting data from our database from postgresSQL.

### Google Slides for Presentation
[Link]( https://docs.google.com/presentation/d/1zNJLu_Os-ALgjHbccoEGw9cjZcJPYD_3G4ZGsKlYAwc/edit#slide=id.p)

## GitHub
### Team communication protocol:
We will be communicating via Slack, Google Meet, TA meeting hours, and class breakout rooms.

### Dataset cleaning progression
Wildfire dataset: [Pt.1](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt1.ipynb), [Pt.2](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt2.ipynb), [Pt.3](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt3.ipynb)

## Machine Learning Model 
We utilized panda's profiling to visualize metadata of the original dataset. We then removed nulls, checked for duplicates, and removed noncontributing data, based on our machine learning model. For our model, we wanted to use random forest learning method instead of using decision trees because they tend to outperform them. We used random forest classification instead of regressor since our prediction will be categorical and not continuous. We also elected random sampling for splitting, training, and testing dataset.
To achieve a reasonable accuracy score for our model (score = 0.91), we had to play with our features and hyperparameters to determine which features to drop and which hyperparameters to use. We found a useful article called ["Hyperparameter Tuning the Random Forest in Python"]( https://towardsdatascience.com/hyperparameter-tuning-the-random-forest-in-python-using-scikit-learn-28d2aa77dd74), that helped explain grid searches and the various hyperparameters that can be used for this model.   

Model Progression: [Pt.1](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v1.ipynb), [Pt.2](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v2.ipynb), [Pt.3](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v3.ipynb), [Pt.4](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/randomforestclassifier_trial_and_error_91.ipynb)

[Random Forest Regression Final](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_model_wildfire_segment_2.ipynb)

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
The tools we plan to use: HTML Design
- Use Flask app
- Leaflet or Python Plotly for visualization
- Heroku to host URL
- Heroku project name is ucb-projectone
Users will select county and month from drop down list, and the model will provide the class of the fire size.

## Technologies 
**Database:** PostgreSQL 11 - pgAdmin 4

**Code:** Jupyter Notebook (Python)

**Machine Learning Model:** Random Forest Classification Model

**Presentation:** HTML website 

**Presentation:** HTML website or Tableau storyboard


