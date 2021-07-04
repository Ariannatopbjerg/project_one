from flask import Flask, render_template
import os
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

engine = create_engine(os.environ["DATABASE_AWS"])
Base = automap_base()
Base.prepare(engine, reflect=True)

wildfire = Base.classes.wildfireDataFinal
session=Session(engine)
for row in session.query(wildfire).all():
   print(row.State_name)

app = Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html")

if __name__ == "__main__":
   app.run()

