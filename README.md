
# Segment 2
## Presentation
We selected the topic of Wildfires across the United States. The members of our team live or have lived in the Bay Area of California. A few years ago, when the fires were running rampant, we all experienced ashes raining from the sky and not being able to see the sun for days. This topic touches us personally and piques our interest. To know more about this topic and future potential wildfires, we want to see if it is possible to predict future fires based on past fire data. Our project consists of analyzing fire data to determine at what accuracy if any, can we predict the class of the fire size. We will clean the input dataset to  demonstrate that in deed we can predict up to 91% accuracy. At this phase, we have eliminated the dataset to **enter data rows**. This dataset is a sub-sample from 1.88 Million US Fires combined with historical weather and vegetation data from the website Kaggle.
Source:U.S. Wildfire data (plus other attributes). https://www.kaggle.com/capcloudcoder/us-wildfire-data-plus-other-attributes?select=FW_Veg_Rem_Combined.csv

## GitHub
Team communication Protocol: We will be communicating via Slack, Daily Google Meet, TA meeting hours, and class breakout rooms.**please upload all cleaning data notebooks**

## Machine learning model

We utilized panda's profiling to visualize metadata of the orignal dataset. We then removed nulls, checked for duplicates, removed non contributing data based on our ML model. Prior to removing the weather related data, we attempted the ML model using the weather data, and it yielded poor accuracy scores. We ultimately elected to eliminate 30 days prior, 15 days prior, and 7 day prior, weather data because we are predicting the class of the fire size because we deemed the weather data non contributing. We decided on ensemble learning method for classfication because it uses multiple learning decision trees. Random forest is versatile. It can perform both regression and classification. If there are enough trees, the clssification is unlikely to overfit because of the many decision trees. We utilized Random Forest Classifier and elected random sampling for spliting, training, and testing dataset.

## Database
Our data is stored in PostgreSQL. We are using SQLAlchemy to connect our database to our jupyter notebook. We will join our wildfire data set with an additional population dataset to further enhance our analysis. 

We need to provide a schema/ERD. Enter image of screen shot of the schema/ERD

## DashBoard
The tools we plan to use: 
 HTML Design
- Use Flask app
- Leaflet or Python Plotly for visualization
- Heroku to host URL
- Heroku project name is ucb-projectone

Users will select county and month from drop down list, and the model will provide the class of the fire size. 