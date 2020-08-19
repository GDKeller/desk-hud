const request = require('request');

let apiKey = 'ef84cb715e7bfae835b8185d5d349780';
let city = 'los angeles,us';
let currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

var dataTemp = '';
var dataLocation = '';

fetchData()
window.setInterval(function() {
    fetchData()
}, 5000);




function fetchData() {
    request(currentWeather, function (err, response, body) {
        if(err){
            console.log('error:', error);
        } else {
            let weather = JSON.parse(body);
            // console.log(weather);
            dataDesc = weather.weather["0"].main;
            dataTemp = Math.round(weather.main.temp);
            dataLocation = weather.name;
            renderData();
        }
    });
}

function renderData() {
    var elTemp = document.querySelector('.temp');
    var elDesc = document.querySelector('.description');
    var elLocation = document.querySelector('.location');
    elDesc.innerHTML = dataDesc;
    elTemp.innerHTML = dataTemp;
    switch(true) {
        case (dataTemp >= 90):
            elTemp.classList.add('hot');
            break;
        case (dataTemp < 90 && dataTemp > 80):
            elTemp.classList.add('warm');
            break;
        case (dataTemp < 50):
            elTemp.classList.add('cold');
            break;
    }
    elLocation.innerHTML = dataLocation;
}