from flask import Flask, render_template, request, send_from_directory
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, distinct, MetaData
import json

engine = create_engine(os.environ["DATABASE_AWS"])
Base = automap_base()
Base.prepare(engine, reflect=True)

# Use dataset
wildfire = Base.classes.wildfireDataFinal
session = Session(engine)
State_name = wildfire.State_name
# metadata = MetaData(engine)
# metadata.reflect()
# print(metadata.tables)
# table = metadata.tables.State_name

# for row in session.query(wildfire).all():
#    print(row.State_name, row.County)

app = Flask(__name__)

@app.route("/Resources/<path:path>")
def static_dir(path):
    return send_from_directory("Resources", path)

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/api/state", methods=['POST'])
def api_state():
   print('apistatecall')
   selectedstate = request.form['state']
   sdata=[]
   for row in session.query(wildfire).filter_by(State_name = selectedstate):
      st={}
      for column in row.__table__.columns:
        st[column.name] = str(getattr(row, column.name))
      # st['statenm']=row.State_name
      sdata.append(st)       
   return json.dumps(sdata)
   # return render_template("index.html")

@app.route("/api/counties", methods=['POST'])
def api_counties():
   print('apicountiescall')
   selectedstate = request.form['state']
   sdata=[]
   for row in session.query(wildfire).filter_by(State_name = selectedstate):
      if row['county'] not in sdata:
        sdata.append(row['county'])       
   return json.dumps(sdata)
   # return render_template("index.html")

@app.route("/api/county", methods=['POST'])
def api_county():
   print('apicountycall')
   selectedstate = request.form['state']
   selectedcounty = request.form['county']
   sdata=[]
   for row in session.query(wildfire).filter_by(County = selectedcounty, State_name = selectedstate):
      st={}
      for column in row.__table__.columns:
        st[column.name] = str(getattr(row, column.name))
      sdata.append(st)       
   return json.dumps(sdata)

@app.route("/api/states", methods=['POST'])
def api_states():
   print('apistatescall')
   sdata=[]
   query = session.query(wildfire)
   states = [row.State_name for row in query.all()]
   for state in states:

   # for row in session.query(wildfire).filter_by(State_name = selectedstate):
      # st={}
      # for column in row.__table__.columns:
      #   st[column.name] = str(getattr(row, column.name))
      if state not in sdata:
         sdata.append(state)       
   return json.dumps(sdata)


if __name__ == "__main__":
   app.run()

