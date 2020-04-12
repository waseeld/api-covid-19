var request = require("request");
var data
var options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    json: true,
    headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '322f4cfb54msh2d5a7518f8ddce5p1abe37jsnae3ba66258dc'
    }
};

request(options, function (error, response, body) {
    if (error) throw new Error(error);
    data = body.response
    console.log(body);
});

///////

///////
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(data);
})

app.get('api/golf', function (req, res) {
    let json = []
    for (let index = 0; index < data.length; index++) {
        can = data[index].country
        switch (can) {
            case "All":
                json.push(data[index])
                break;
            case "Saudi-Arabia":
                json.push(data[index])
                break;
            case "Oman":
                json.push(data[index])
                break;
            case "Bahrain":
                json.push(data[index])
                break
            case "UAE":
                json.push(data[index])
                break
            case "Qatar":
                json.push(data[index])
                break
            case "Kuwait":
                json.push(data[index])
                break
        }
    }
    res.send(json);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})