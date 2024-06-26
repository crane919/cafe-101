import json
from flask import Flask, send_from_directory, request, redirect
from flask_cors import CORS

ORDER_FILE = "orders.json"

app = Flask(__name__, static_folder=None)
CORS(app)

@app.route("/")
def root():
    # Simple redirect so that navigating to "/"
    # redirects to "/index.html"
    json_file = "orders.json"
    data = json.load(open(json_file))
    return data

@app.route("/orders")
def get_orders():
    return ORDERS

@app.route("/add-order", methods=["POST"])
def addOrder():
    body = request.json
    print(body)
    order_id = list(body.keys())[0]  # Extract the unique ID from the body
    order_info = body[order_id]  # Extract the order information
    ORDERS["orders"][order_id] = order_info  # Add the order to the ORDERS dictionary
    write_orders()  # Assuming write_orders() function is defined elsewhere to update the orders data
    return "ok"  # Status code

@app.route("/delete-order", methods=["POST"])
def deleteOrder():
    id_to_del = request.json
    print(id_to_del)
    del ORDERS["orders"][id_to_del]
    write_orders()
    return "ok"

def write_orders():
    with open(ORDER_FILE, "wt") as fp:
        json.dump(ORDERS, fp, indent=2)

def read_orders():
    with open(ORDER_FILE, "rt") as fp:
        return json.load(fp)

ORDERS = read_orders()
