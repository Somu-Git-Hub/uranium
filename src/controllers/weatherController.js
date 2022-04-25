const axios = require("axios");

let getWeather = async function (req, res) {
    let city = req.query.q;
    let id = req.query.appid;
    try {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let getTemperature = async function (req, res) {
    let city = req.query.q;
    let id = req.query.appid;
    try {
        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options);
        let data = result.data.main.temp;
        res.status(200).send({ Temperature : data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

let getSortedTemperature = async function (req, res) {
    let appid = req.query.appid;
    try {
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"];
        let arr = [];
        for(let i = 0 ; i < cities.length ; i++){
            let content = {city : cities[i]};
            let options = {
                method: 'get',
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`
            }
            let result = await axios(options);
            content.Temperature = result.data.main.temp;
            arr.push(content);
        }
        let sortedArray = arr.sort(function(a, b) {
            return a.Temperature - b.Temperature
        });
        res.status(200).send({ TemperatureOfCities : sortedArray, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeather = getWeather;
module.exports.getTemperature = getTemperature;
module.exports.getSortedTemperature = getSortedTemperature;