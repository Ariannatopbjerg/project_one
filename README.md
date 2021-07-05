# United States Wildfire Analysis

## Project Overview
With wildfires growing in frequency and size, affecting more and more people and wildlife, we elected to analyze wildfires across the United States. The topic touched the team members because they lived in the Bay Area of California while the fires were running rampant and experienced ashes raining from the sky and sunless days. The goal was to see if it is possible to predict future fire sizes from past fire data. The dataset analyzed is a subset of [1.88 Millions US Fires](https://www.kaggle.com/rtatman/188-million-us-wildfires) combined with historical weather and vegetation data. The question to answer with this data is to determine at what accuracy if any, is it possible to predict the class size of a fire.

To predict future fire size class, data had to be transformed and loaded into PostgreSQL. The next step was to experiment with different machine learning models, such as Random Forest Regressor. The best model for this analysis was Random Forest Classification; the model yielded an accuracy score of seventy percent. Due to the lack of fire science expertise and time restrictions, it was difficult to improve upon the accuracy score beyond adjusting hyperparameters.

To present the wildfire data, we developed interative visualizations presented on our [Wildfire Interactive Visualizations Dashboard](https://ucb-projectone.herokuapp.com/).

## Resources
Utilized Panda's profiling to visualize metadata of the original dataset. [Removed nulls](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/wildfire_cleanup_pt3.ipynb), [checked for duplicates](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt1.ipynb), and [removed noncontributing data](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/wildfire_cleanup_pt2.ipynb). Used random forest classification model integrated with postgresSQL. Listed below are the numerous technology, programming language and tools we have utilized: 

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
- Machine Learning Random Forest Classifier
- Google Slides 

A copy of our presentation will be available on [Google Slides](https://docs.google.com/presentation/d/1zNJLu_Os-ALgjHbccoEGw9cjZcJPYD_3G4ZGsKlYAwc/edit#slide=id.p).

## Machine Learning Model 
- Utilized Panda's profiling to visualize metadata of the original dataset. Removed nulls, checked for duplicates, and removed noncontributing data.
- Removed features after [initial machine learning model]() due to a negative accuracy score of -117% using Random Forest Regressor model. 
- Removed additional features to improve accuracy score.
- Elected random sampling for splitting, training, and testing dataset.
- Confirmed to use Random Forest Machine Learning Model in lieu of using Decision Trees due to better performance. Limitations for Random Forest are greater time required for training as it combines a lot of decision trees to determine the class as well as requiring much computational power and resources as it builds numerous trees to combine their outputs. 
- Used Random Forest Classifier instead of Random Forest Regressor since the prediction will be categorical and not continuous.
- A useful article that explains grid searches and the various hyperparameters that can be used for this model: ["Hyperparameter Tuning the Random Forest in Python"]( https://towardsdatascience.com/hyperparameter-tuning-the-random-forest-in-python-using-scikit-learn-28d2aa77dd74). 
- The initial accuracy score of the Random Forest Classifier model was [98%](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v3.ipynb). This was due to a high correlation between the feature fire size and the dependent variable fire size class. 
- [Additional training](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/randomforestclassifier_trial_and_error_91.ipynb) was completed with changed features and hyperparameters to correct the high correlation. The new model predicts the fire size class with an accuracy score of [70%](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_model_wildfire_tweaking.ipynb).

### Confusion Matrix
The confusion matrix shows that during the splitting of the test and train samples for our model, fire size class d and e did not split properly, giving 0s in the confusion matrix. Analyzing the data; shown in the pie chart, the classes are imbalanced. For this, we attempted to do a test/train split for each of the six fire size classes, concatenate all the classes together, then oversampled and undersampled the minority classes so the majority and minority classes are balanced in the training set. The outcome of testing to see if oversampling or undersampling would fix the imbalance of the classes were inconclusive. The results for both scenarios were similar to the initial confusion matrix. The only difference were the accuracy scores. Both gave lower accuracy scores compared to the initial model. Classification report can be found [here](https://github.com/Ariannatopbjerg/US_Wildfire/blob/AriannaSeg4/images/classification_report.png). 

![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/AriannaSeg4/images/confussion_matrix.png)   

![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/AriannaSeg4/images/fire_size_class_count.PNG)

## Database 
Early in our project development, we utilized PostgreSQL as our [database](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_DB_Connect.ipynb). Then utilized latitudes and longitudes from the Wildfire dataset, scraped county information making an API to [Federal Communications Commission](https://geo.fcc.gov/api/census/) and created a new table, [joined](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/join_code.png) this with wildfire data using [SQL](https://github.com/Ariannatopbjerg/US_Wildfire/tree/main/sql). View the Enitity Relationship Diagram (ERD) [here](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/ERD-Wildfire.png). Used SQLAlchemy for the connection string between the database and Jupyter Notebook. Original datasource for our analysis is from [kaggle](https://www.kaggle.com/capcloudcoder/us-wildfire-data-plus-other-attributes?select=FW_Veg_Rem_Combined.csv).












