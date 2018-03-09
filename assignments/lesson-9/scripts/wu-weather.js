var weatherObject = new XMLHttpRequest();
weatherObject.open('GET','http://api.wunderground.com/api/fee4c8f4d1d2d888/forecast/conditions/q/MN/Franklin.json', true );
weatherObject.send();
weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
}


