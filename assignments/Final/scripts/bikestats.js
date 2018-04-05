var myObj;

myObj = {
    "bikes": [

        {
            "name": "Bike-inator 3000",
            "type": "Road Bike",
            "features": [
                "Made of durable aluminum",
                "Hydraulic brakes",
                "30 inch wheels",
                        ],
            "colors": [
                "Blue",
                "Green",
                "Red",
                      ],
            "price": "$1,599"
        },

        {
            "name": "Metatron",
            "type": "Mountain Bike",
            "features": [
                "Made of Steel",
                "Has large wheels",
                "Super Comfy Seat"
                        ],
            "colors": [
                "Red",
                "Black",
                "Pink",
                      ],
            "price": "$4,599"
        },

        {
            "name": "Bike for Rich People",
            "type": "Mountain Bike",
            "features": [
                "Made of gold",
                "Can fly",
                "Has tires that will destroy anything in it's path",
                        ],
            "colors": [
                "Black",
                "Red",
                "Gold",
                      ],
            "price": "$8,599"
        }

    ]
};


document.getElementById("firstBike").innerHTML = myObj.bikes[0].name;
document.getElementById("secondBike").innerHTML = myObj.bikes[1].name;
document.getElementById("thirdBike").innerHTML = myObj.bikes[2].name;

document.getElementById("firstBikeType").innerHTML = myObj.bikes[0].type;
document.getElementById("secondBikeType").innerHTML = myObj.bikes[1].type;
document.getElementById("thirdBikeType").innerHTML = myObj.bikes[2].type;

document.getElementById("firstBikeAttributeOne").innerHTML = myObj.bikes[0].features[0];
document.getElementById("firstBikeAttributeTwo").innerHTML = myObj.bikes[0].features[1];
document.getElementById("firstBikeAttributeThree").innerHTML = myObj.bikes[0].features[2];

document.getElementById("secondBikeAttributeOne").innerHTML = myObj.bikes[1].features[0];
document.getElementById("secondBikeAttributeTwo").innerHTML = myObj.bikes[1].features[1];
document.getElementById("secondBikeAttributeThree").innerHTML = myObj.bikes[1].features[2];

document.getElementById("thirdBikeAttributeOne").innerHTML = myObj.bikes[2].features[0];
document.getElementById("thirdBikeAttributeTwo").innerHTML = myObj.bikes[2].features[1];
document.getElementById("thirdBikeAttributeThree").innerHTML = myObj.bikes[2].features[2];

document.getElementById("firstBikeColorOne").innerHTML = myObj.bikes[0].colors[0];
document.getElementById("firstBikeColorTwo").innerHTML = myObj.bikes[0].colors[1];
document.getElementById("firstBikeColorThree").innerHTML = myObj.bikes[0].colors[2];

document.getElementById("secondBikeColorOne").innerHTML = myObj.bikes[1].colors[0];
document.getElementById("secondBikeColorTwo").innerHTML = myObj.bikes[1].colors[1];
document.getElementById("secondBikeColorThree").innerHTML = myObj.bikes[1].colors[2];

document.getElementById("thirdBikeColorOne").innerHTML = myObj.bikes[2].colors[0];
document.getElementById("thirdBikeColorTwo").innerHTML = myObj.bikes[2].colors[1];
document.getElementById("thirdBikeColorThree").innerHTML = myObj.bikes[2].colors[2];

document.getElementById("firstBikePrice").innerHTML = myObj.bikes[0].price;
document.getElementById("secondBikePrice").innerHTML = myObj.bikes[1].price;
document.getElementById("thirdBikePrice").innerHTML = myObj.bikes[2].price;
