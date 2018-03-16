var requestURL = 'http://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/MN/Springfield.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var springfieldWeather = request.response;
    createCityInformation(springfieldWeather);
}

function createCityInformation(jsonObj) {
var springfieldData = jsonObj.current_observation.weather; 
document.getElementById("weatherString").innerHTML=springfieldData;
    
var springfieldData = jsonObj.current_observation.temperature_string;
document.getElementById("currentTemp").innerHTML=springfieldData;
    
var springfieldData = jsonObj.current_observation.wind_mph;
document.getElementById("windSpeed").innerHTML=springfieldData;

var springfieldData = jsonObj.forecast.
document.getElementById("forecastString").src=springfieldData;
        
var springfieldData = jsonObj.current_observation.icon_url;
document.getElementById("forecastImg").src=springfieldData;
}