import os
import json
from flask import Flask, jsonify


app = Flask(__name__)

@app.route("/consumerCredit")
def consumerCredit():
    consumer_path = ('./consumerCredit (complete)/consumerCredit.json')
    with open(consumer_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/cpiCanada')
def cpiCanada():
    cpi_path = ('./cpi (complete)/cpiCanada.json')
    with open(cpi_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/cpiProvincial')
def cpiProvincal():
    cpiPro_path = ('./cpi (complete)/cpiProvincial.json')
    with open(cpiPro_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)
    
@app.route('/gdpByProvince')
def gdpProvince():
    gdp_path = ('./gdp (complete)/gdpByProvince.json')
    with open(gdp_path,'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/giniIndexCanada')
def giniIndexCanada():
    gini_path = ('./giniIndexData (complete)/giniIndexCanada.json')
    with open(gini_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/giniIndexProvincial')
def giniIndexProvincial():
    giniPro_path = ('./giniIndexData (complete)/giniIndexProvincial.json')
    with open(giniPro_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/MoneySupply')
def MoneySupply():
    ms_path = ('./money_supply/M1_moneySupply.json')
    with open(ms_path,'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/populationData/BothSex')
def populationData():
    popbothsex_path = ('./populationData (complete)/PopPerProvBothSex.json')
    with open(popbothsex_path,'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/populationData/Female')
def populationFemale():
    popfem_path = ('./populationData (complete)/popPerProvFemale.json')
    with open(popfem_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/populationData/Male')
def populationMale():
    popmale_path = ('./populationData (complete)/popPerProvMale.json')
    with open(popmale_path,'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

@app.route('/wagesCanada')
def wagesCanada():
    wagesCanada_path = ('./wagesCanada (complete)/wagesCanada.json')
    with open(wagesCanada_path, 'r') as jsonfile:
        file_data = json.loads(jsonfile.read())
    return jsonify(file_data)

if __name__ == "__main__":
    app.run(debug=True)
