var requestURL = 'https://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/MN/Franklin.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var franklinWeather = request.response;
    createCityInformation(franklinWeather);
}

function createCityInformation(jsonObj) {
var franklinData = jsonObj.current_observation.weather; 
document.getElementById("weatherString").innerHTML=franklinData;
    
var franklinData = jsonObj.current_observation.temperature_string;
document.getElementById("currentTemp").innerHTML=franklinData;
    
var fraklinData = jsonObj.current_observation.wind_mph;
document.getElementById("windSpeed").innerHTML=franklinData;

var franklinData = jsonObj.forecast.
document.getElementById("forecastString").src=franklinData;
        
var franklinData = jsonObj.current_observation.icon_url;
document.getElementById("forecastImg").src=franklinData;
}
