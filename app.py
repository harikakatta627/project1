# 1. Import the Flask class from the flask module
from flask import Flask

# 2. Create an instance of the Flask class
#    '_name_' tells Flask where to look for resources
app = Flask(_name_)

# 3. Define a route for the homepage ("/")
#    This decorator tells Flask that the function below
#    should be triggered when someone visits the main URL.
@app.route('/')
def hello_world():
    # 4. The function that returns the response to the browser
    return 'Hello, World!'