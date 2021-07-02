from flask import Flask, render_template, redirect

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection

# Route to html page. This function is what links our visual representation of our work, our web app, to the code that powers it.
@app.route("/")
def index():
   return render_template("./index.html")


#Flask to run the code
if __name__ == "__main__":
   app.run()
