# US_Wildfire

## Team Member Roles
**Square**: Arianna

**Triangle**: Natalie

**Circle**: Hsinyu

**X**: Jen

# Deliverable 2

### Team communication Protocol:
We will be communicating via Slack, Google Meet, TA meeting hours, and class breakout rooms.

## Presentation 
### Selected topic
Wildfires across the United States. 

### Reason why we selected this topic
The members of our team live or have lived in the Bay Area of California. A few years ago, when the fires were running rampant, we all experienced ashes raining from the sky and not being able to see the sun for days. This topic touches us personally and piques our interest. To know more about this topic and future potential wildfires, we want to see if it is possible to predict future fire sizes from past fire data.

### Description of source of data
This dataset is a sub-sample from [1.88 Million US Fires]( https://www.kaggle.com/rtatman/188-million-us-wildfires) combined with historical weather and vegetation data from the website Kaggle. 

***Source***

U.S. Wildfire data (plus other attributes). https://www.kaggle.com/capcloudcoder/us-wildfire-data-plus-other-attributes?select=FW_Veg_Rem_Combined.csv

County data. https://geo.fcc.gov/api/census/

### Question we hope to answer with this data
Our project consists of analyzing fire data to determine at what accuracy if any, can we predict the class of the fire size.

### Analysis Phase

### Google Slides for Presentation
[Link]( https://docs.google.com/presentation/d/1zNJLu_Os-ALgjHbccoEGw9cjZcJPYD_3G4ZGsKlYAwc/edit#slide=id.p)

## Project TimeLine
- Looking over dataset's profile (pandas profiling)
- Cleaning Data: removing unnecessary columns and renaming columns
- Database: upload preliminary data to pgAdmin
- Machine Learning Model: Random Forest Regressor Model 
- Create interactive HTML website or Tableau storyboard

### Cleaning Dataset Progression
Wildfire dataset: [Pt.1](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt1.ipynb), [Pt.2](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt2.ipynb), [Pt.3](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_cleanup_pt3.ipynb)

### Database Code
[Database connection](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/Wildfire_DB_Connect.ipynb)

ERD
![](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/images/ERD-Wildfire.png)

### Machine Learning Model Code
Model Progression: [Pt.1](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v1.ipynb), [Pt.2](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v2.ipynb), [Pt.3](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_RandomForest_v3.ipynb), [Pt.4](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/randomforestclassifier_trial_and_error_91.ipynb)

[Random Forest Regression Final](https://github.com/Ariannatopbjerg/US_Wildfire/blob/main/Notebooks/ML_model_wildfire_segment_2.ipynb)

## Technologies 
**Database:** PostgreSQL 11 - pgAdmin 4

**Code:** Jupyter Notebook (Python)

**Machine Learning Model:** Random Forest Regression Model

**Presentation:** HTML website or Tableau storyboard

