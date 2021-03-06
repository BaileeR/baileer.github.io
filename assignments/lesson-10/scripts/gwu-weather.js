var requestURL = 'https://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/AL/Greenville.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var greenvilleWeather = request.response;
    createCityInformation(greenvilleWeather);
}

function createCityInformation(jsonObj) {
var greenvilleData = jsonObj.current_observation.weather; 
document.getElementById("weatherString").innerHTML=greenvilleData;
    
var greenvilleData = jsonObj.current_observation.temperature_string;
document.getElementById("currentTemp").innerHTML=greenvilleData;
    
var greenvilleData = jsonObj.current_observation.wind_mph;
document.getElementById("windSpeed").innerHTML=greenvilleData;

var greenvilleData = jsonObj.forecast.txt_forecast.forecastday[0].fcttext;
document.getElementById("forecastString").innerHTML=greenvilleData;
        
var greenvilleData = jsonObj.forecast.txt_forecast.forecastday[0].icon_url;
document.getElementById("forecastImg").src=greenvilleData;
}