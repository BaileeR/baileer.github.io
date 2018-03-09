var section = document.querySelector('section');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var weatherData = request.response;
    displayInfo(weatherData);
}
function displayInfo(jsonObj) {
    var towns = jsonObj["towns"];
    for(var i = 0; i < towns.length; i++){
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p1.textContent= "Motto: "+ towns[i].motto;
        p2.textContent= "Year Founded: " + towns[i].yearFounded;
        p3.textContent=towns[i].currentPopulation;
        p4.textContent=towns[i].averageRainfall;
        
        document.getElementsByClassName("data"+[i+1])[0].appendChild(p1);
        document.getElementsByClassName("data"+[i+1])[0].appendChild(p2);
        document.getElementsByClassName("data"+[i+1])[0].appendChild(p3);
        document.getElementsByClassName("data"+[i+1])[0].appendChild(p4);    
    }
}
