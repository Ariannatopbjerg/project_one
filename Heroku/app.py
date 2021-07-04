# for flask
# 
from flask import Flask, jsonify
from flask import Flask, render_template, request
# import sqlalchemy ??


app = Flask(__name__)

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/")
def about():
   return render_template("about.html")

if __name__ == "__main__":
   app.run()

