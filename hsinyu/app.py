from flask import Flask, render_template, request, send_from_directory
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import json

engine = create_engine(os.environ["DATABASE_AWS"])
Base = automap_base()
Base.prepare(engine, reflect=True)

# Use dataset
wildfire = Base.classes.wildfireDataFinal
session = Session(engine)
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

if __name__ == "__main__":
   app.run()

