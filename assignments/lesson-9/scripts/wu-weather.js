var requestURL = "http://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/MN/Franklin.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function () {
    var franklinWeather = request.response;
    createCityInformation(franklinData);
}

function insertFranklinInfo(jsonObj) {
var franklinData = franklinWeather.current.temperature_string; 

document.getElementById("weatherString")

}
