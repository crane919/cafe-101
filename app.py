import json
from flask import Flask, send_from_directory, request, redirect

BUILD_FOLDER = "frontend/build"
ORDER_FILE = "orders.json"


app = Flask(__name__, static_folder=None)


@app.route("/")
def root():
    # Simple redirect so that navigating to "/"
    # redirects to "/index.html"
    return redirect("/index.html")


@app.route("/orders")
def get_orders():
    return ORDERS


@app.route("/add-order", methods=["POST"])
def addOrder():
    body = request.json
    ##print(body)
    ORDERS["orders"].append(body)
    write_orders()
    return "ok"


@app.route("/delete-order", methods=["POST"])
def deletePicture():
    body = request.json
    to_delete = body["orders"]
    ##print(to_delete)
    new_orders = []
    for (i, ord) in enumerate(ORDERS["orders"]):
        if i != to_delete:
            new_orders.append(ord)
    ORDERS["orders"] = new_orders
    write_orders()
    return "ok"


# @app.route("/<path:p>")
# def serveFile(p):
#     ##print(f"asking for file {p}")
#     return send_from_directory(BUILD_FOLDER, p)


def write_orders():
    with open(ORDER_FILE, "wt") as fp:
        json.dump(ORDERS, fp, indent=2)


def read_orders():
    with open(ORDER_FILE, "rt") as fp:
        return json.load(fp)


ORDERS = read_orders()
