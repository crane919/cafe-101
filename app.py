import json
from flask import Flask, send_from_directory, request, redirect

BUILD_FOLDER = "frontend/build"
PICTURES_FILE = "pictures.json"


app = Flask(__name__, static_folder=None)


@app.route("/")
def root():
    # Simple redirect so that navigating to "/"
    # redirects to "/index.html"
    return redirect("/index.html")


@app.route("/pictures")
def get_pictures():
    return PICTURES


@app.route("/add-picture", methods=["POST"])
def addPicture():
    body = request.json
    ##print(body)
    PICTURES["pictures"].append(body)
    write_pictures()
    return "ok"


@app.route("/delete-picture", methods=["POST"])
def deletePicture():
    body = request.json
    to_delete = body["picture"]
    ##print(to_delete)
    new_pics = []
    for (i, pic) in enumerate(PICTURES["pictures"]):
        if i != to_delete:
            new_pics.append(pic)
    PICTURES["pictures"] = new_pics
    write_pictures()
    return "ok"


@app.route("/<path:p>")
def serveFile(p):
    ##print(f"asking for file {p}")
    return send_from_directory(BUILD_FOLDER, p)


def write_pictures():
    with open(PICTURES_FILE, "wt") as fp:
        json.dump(PICTURES, fp, indent=2)


def read_pictures():
    with open(PICTURES_FILE, "rt") as fp:
        return json.load(fp)


PICTURES = read_pictures()
