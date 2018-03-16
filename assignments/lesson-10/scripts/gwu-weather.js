var requestURL = 'https://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/UT/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var greenvillenWeather = request.response;
    createCityInformation(springfieldWeather);
}

function createCityInformation(jsonObj) {
var greenvilleData = jsonObj.current_observation.weather; 
document.getElementById("weatherString").innerHTML=springfieldData;
    
var greenvilleData = jsonObj.current_observation.temperature_string;
document.getElementById("currentTemp").innerHTML=springfieldData;
    
var greenvilleData = jsonObj.current_observation.wind_mph;
document.getElementById("windSpeed").innerHTML=springfieldData;

var greenvilleData = jsonObj.forecast.
document.getElementById("forecastString").src=springfieldData;
        
var greenvilleData = jsonObj.current_observation.icon_url;
document.getElementById("forecastImg").src=springfieldData;
}