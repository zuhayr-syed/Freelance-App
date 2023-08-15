import awsgi
import boto3
import os

from flask_cors import CORS
from flask import Flask, jsonify, request
from uuid import uuid4

BASE_ROUTE = "/post"
TABLE = os.environ.get('STORAGE_FREELANCEDB_NAME')

client = boto3.client('dynamodb')
app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE, methods=['POST'])
def create_post():
    request_json = request.get_json()
    client.put_item(TableName=TABLE, Item={
        'id': {'S': str(uuid4())},
        'postTitle': {'S': request_json.get('postTitle')},
        'projDesc': {'S': request_json.get('projDesc')},
        'projSpec': {'S': request_json.get('projSpec')},
        'specReq': {'S': request_json.get('specReq')},
        'startDate': {'S': request_json.get('startDate')},
        'endDate': {'S': request_json.get('endDate')},
        'payType': {'S': request_json.get('payType')},
        'amount': {'S': request_json.get('amount')},
        'email': {'S': request_json.get('email')},
        'phoneNum': {'S': request_json.get('phoneNum')},
        'fullName': {'S': request_json.get('fullName')},
        'perEmail': {'S': request_json.get('perEmail')},
    })
    return jsonify(message="post created")

@app.route(BASE_ROUTE, methods=['GET'])
def list_items():
    return jsonify(data=client.scan(TableName=TABLE))


def handler(event, context):
    return awsgi.response(app, event, context)