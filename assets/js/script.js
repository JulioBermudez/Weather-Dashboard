var atlantaApi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var denverApi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var seattleApi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var sanFranciscoApi = "https://api.openweathermap.org/data/2.5/forecast?q=Francisco&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var orlandoApi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var newYorkApi = "https://api.openweathermap.org/data/2.5/forecast?q=York&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var chicagoApi =
  "https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
var austinApi = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=eca7da31468c16ddffa7abce668f3014&units=imperial";

var atlantaBtnEl = document.querySelector("#atlantaBtn");
var denverBtnEl = document.querySelector("#denverBtn");
var seattleBtnEl = document.querySelector("#seattleBtn");
var sanFranciscoEl = document.querySelector("#sanFranciscoBtn");
var orlandoEl = document.querySelector("#orlandoBtn");
var newYorkEl = document.querySelector("#newYorkBtn");
var chicagoEl = document.querySelector("#chicagoBtn");
var austinEl = document.querySelector("#austinBtn");

function atlantaGetApi() {
 //Atlanta
 fetch(atlantaApi)
 .then(function (response) {
   return response.json();
 })
 .then(function (atlantaData) {   
   //Data Display
   $("#cityName").text(
     atlantaData.city.name + " (" + atlantaData.list[0].dt_txt + ")"
   );
   $("#temp").text(atlantaData.list[0].main.temp + " °F");
   $("#wind").text(atlantaData.list[0].wind.speed + " MPH");
   $("#humidity").text(atlantaData.list[0].main.humidity + " %");
   //Section Cards
   //Day one
   $("#d1Date").text(atlantaData.list[8].dt_txt);
   $("#d1Temp").text(atlantaData.list[8].main.temp + " °F");
   $("#d1Wind").text(atlantaData.list[8].wind.speed + " MPH");
   $("#d1Humidity").text(atlantaData.list[8].main.humidity + " %");
   //Day Two
   $("#d2Date").text(atlantaData.list[16].dt_txt);
   $("#d2Temp").text(atlantaData.list[16].main.temp + " °F");
   $("#d2Wind").text(atlantaData.list[16].wind.speed + " MPH");
   $("#d2Humidity").text(atlantaData.list[16].main.humidity + " %");
   //Day Three
   $("#d3Date").text(atlantaData.list[24].dt_txt);
   $("#d3Temp").text(atlantaData.list[24].main.temp + " °F");
   $("#d3Wind").text(atlantaData.list[24].wind.speed + " MPH");
   $("#d3Humidity").text(atlantaData.list[24].main.humidity + " %");
   //Day Four
   $("#d4Date").text(atlantaData.list[32].dt_txt);
   $("#d4Temp").text(atlantaData.list[32].main.temp + " °F");
   $("#d4Wind").text(atlantaData.list[32].wind.speed + " MPH");
   $("#d4Humidity").text(atlantaData.list[32].main.humidity + " %");
   //Day Five
   $("#d5Date").text(atlantaData.list[39].dt_txt);
   $("#d5Temp").text(atlantaData.list[39].main.temp + " °F");
   $("#d5Wind").text(atlantaData.list[39].wind.speed + " MPH");
   $("#d5Humidity").text(atlantaData.list[39].main.humidity + " %");
 });
 
}
function denverGetApi() {
    //Denver
    fetch(denverApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (denverData) {     
        //Data Display
        $("#cityName").text(
          denverData.city.name + " (" + denverData.list[0].dt_txt + ")"
        );
        $("#temp").text(denverData.list[0].main.temp + " °F");
        $("#wind").text(denverData.list[0].wind.speed + " MPH");
        $("#humidity").text(denverData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(denverData.list[8].dt_txt);
        $("#d1Temp").text(denverData.list[8].main.temp + " °F");
        $("#d1Wind").text(denverData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(denverData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(denverData.list[16].dt_txt);
        $("#d2Temp").text(denverData.list[16].main.temp + " °F");
        $("#d2Wind").text(denverData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(denverData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(denverData.list[24].dt_txt);
        $("#d3Temp").text(denverData.list[24].main.temp + " °F");
        $("#d3Wind").text(denverData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(denverData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(denverData.list[32].dt_txt);
        $("#d4Temp").text(denverData.list[32].main.temp + " °F");
        $("#d4Wind").text(denverData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(denverData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(denverData.list[39].dt_txt);
        $("#d5Temp").text(denverData.list[39].main.temp + " °F");
        $("#d5Wind").text(denverData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(denverData.list[39].main.humidity + " %");
      
    });
    
   }  

   function seattleGetApi() {
    //Seattle
    fetch(seattleApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (seattleData) {     
        //Data Display
        $("#cityName").text(
            seattleData.city.name + " (" + seattleData.list[0].dt_txt + ")"
        );
        $("#temp").text(seattleData.list[0].main.temp + " °F");
        $("#wind").text(seattleData.list[0].wind.speed + " MPH");
        $("#humidity").text(seattleData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(seattleData.list[8].dt_txt);
        $("#d1Temp").text(seattleData.list[8].main.temp + " °F");
        $("#d1Wind").text(seattleData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(seattleData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(seattleData.list[16].dt_txt);
        $("#d2Temp").text(seattleData.list[16].main.temp + " °F");
        $("#d2Wind").text(seattleData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(seattleData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(seattleData.list[24].dt_txt);
        $("#d3Temp").text(seattleData.list[24].main.temp + " °F");
        $("#d3Wind").text(seattleData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(seattleData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(seattleData.list[32].dt_txt);
        $("#d4Temp").text(seattleData.list[32].main.temp + " °F");
        $("#d4Wind").text(seattleData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(seattleData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(seattleData.list[39].dt_txt);
        $("#d5Temp").text(seattleData.list[39].main.temp + " °F");
        $("#d5Wind").text(seattleData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(seattleData.list[39].main.humidity + " %");
      
    });
    
   }  
   //San Francisco
   function sanFranciscoGetApi() {    
    fetch(sanFranciscoApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (sanFranciscoData) {     
        //Data Display
        $("#cityName").text(
            sanFranciscoData.city.name + " (" + sanFranciscoData.list[0].dt_txt + ")"
        );
        $("#temp").text(sanFranciscoData.list[0].main.temp + " °F");
        $("#wind").text(sanFranciscoData.list[0].wind.speed + " MPH");
        $("#humidity").text(sanFranciscoData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(sanFranciscoData.list[8].dt_txt);
        $("#d1Temp").text(sanFranciscoData.list[8].main.temp + " °F");
        $("#d1Wind").text(sanFranciscoData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(sanFranciscoData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(sanFranciscoData.list[16].dt_txt);
        $("#d2Temp").text(sanFranciscoData.list[16].main.temp + " °F");
        $("#d2Wind").text(sanFranciscoData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(sanFranciscoData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(sanFranciscoData.list[24].dt_txt);
        $("#d3Temp").text(sanFranciscoData.list[24].main.temp + " °F");
        $("#d3Wind").text(sanFranciscoData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(sanFranciscoData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(sanFranciscoData.list[32].dt_txt);
        $("#d4Temp").text(sanFranciscoData.list[32].main.temp + " °F");
        $("#d4Wind").text(sanFranciscoData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(sanFranciscoData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(sanFranciscoData.list[39].dt_txt);
        $("#d5Temp").text(sanFranciscoData.list[39].main.temp + " °F");
        $("#d5Wind").text(sanFranciscoData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(sanFranciscoData.list[39].main.humidity + " %");
      
    });
    
   }  
   //Orlando
   function orlandoGetApi() {
    fetch(orlandoApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (orlandoData) {     
        //Data Display
        $("#cityName").text(
            orlandoData.city.name + " (" + orlandoData.list[0].dt_txt + ")"
        );
        $("#temp").text(orlandoData.list[0].main.temp + " °F");
        $("#wind").text(orlandoData.list[0].wind.speed + " MPH");
        $("#humidity").text(orlandoData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(orlandoData.list[8].dt_txt);
        $("#d1Temp").text(orlandoData.list[8].main.temp + " °F");
        $("#d1Wind").text(orlandoData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(orlandoData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(orlandoData.list[16].dt_txt);
        $("#d2Temp").text(orlandoData.list[16].main.temp + " °F");
        $("#d2Wind").text(orlandoData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(orlandoData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(orlandoData.list[24].dt_txt);
        $("#d3Temp").text(orlandoData.list[24].main.temp + " °F");
        $("#d3Wind").text(orlandoData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(orlandoData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(orlandoData.list[32].dt_txt);
        $("#d4Temp").text(orlandoData.list[32].main.temp + " °F");
        $("#d4Wind").text(orlandoData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(orlandoData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(orlandoData.list[39].dt_txt);
        $("#d5Temp").text(orlandoData.list[39].main.temp + " °F");
        $("#d5Wind").text(orlandoData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(orlandoData.list[39].main.humidity + " %");
      
    });
    
   }  

   //New York
   function newYorkGetApi() {
    fetch(newYorkApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (newYorkData) {     
        //Data Display
        $("#cityName").text(
            newYorkData.city.name + " (" + newYorkData.list[0].dt_txt + ")"
        );
        $("#temp").text(newYorkData.list[0].main.temp + " °F");
        $("#wind").text(newYorkData.list[0].wind.speed + " MPH");
        $("#humidity").text(newYorkData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(newYorkData.list[8].dt_txt);
        $("#d1Temp").text(newYorkData.list[8].main.temp + " °F");
        $("#d1Wind").text(newYorkData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(newYorkData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(newYorkData.list[16].dt_txt);
        $("#d2Temp").text(newYorkData.list[16].main.temp + " °F");
        $("#d2Wind").text(newYorkData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(newYorkData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(newYorkData.list[24].dt_txt);
        $("#d3Temp").text(newYorkData.list[24].main.temp + " °F");
        $("#d3Wind").text(newYorkData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(newYorkData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(newYorkData.list[32].dt_txt);
        $("#d4Temp").text(newYorkData.list[32].main.temp + " °F");
        $("#d4Wind").text(newYorkData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(newYorkData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(newYorkData.list[39].dt_txt);
        $("#d5Temp").text(newYorkData.list[39].main.temp + " °F");
        $("#d5Wind").text(newYorkData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(newYorkData.list[39].main.humidity + " %");
      
    });
    
   }  

   //Chicago
   function newYorkGetApi() {
    fetch(newYorkApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (newYorkData) {     
        //Data Display
        $("#cityName").text(
            newYorkData.city.name + " (" + newYorkData.list[0].dt_txt + ")"
        );
        $("#temp").text(newYorkData.list[0].main.temp + " °F");
        $("#wind").text(newYorkData.list[0].wind.speed + " MPH");
        $("#humidity").text(newYorkData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(newYorkData.list[8].dt_txt);
        $("#d1Temp").text(newYorkData.list[8].main.temp + " °F");
        $("#d1Wind").text(newYorkData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(newYorkData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(newYorkData.list[16].dt_txt);
        $("#d2Temp").text(newYorkData.list[16].main.temp + " °F");
        $("#d2Wind").text(newYorkData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(newYorkData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(newYorkData.list[24].dt_txt);
        $("#d3Temp").text(newYorkData.list[24].main.temp + " °F");
        $("#d3Wind").text(newYorkData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(newYorkData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(newYorkData.list[32].dt_txt);
        $("#d4Temp").text(newYorkData.list[32].main.temp + " °F");
        $("#d4Wind").text(newYorkData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(newYorkData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(newYorkData.list[39].dt_txt);
        $("#d5Temp").text(newYorkData.list[39].main.temp + " °F");
        $("#d5Wind").text(newYorkData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(newYorkData.list[39].main.humidity + " %");
      
    });
    
   }  

   //Austin
   function newYorkGetApi() {
    fetch(newYorkApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (newYorkData) {     
        //Data Display
        $("#cityName").text(
            newYorkData.city.name + " (" + newYorkData.list[0].dt_txt + ")"
        );
        $("#temp").text(newYorkData.list[0].main.temp + " °F");
        $("#wind").text(newYorkData.list[0].wind.speed + " MPH");
        $("#humidity").text(newYorkData.list[0].main.humidity + " %");
        //Section Cards
        //Day one
        $("#d1Date").text(newYorkData.list[8].dt_txt);
        $("#d1Temp").text(newYorkData.list[8].main.temp + " °F");
        $("#d1Wind").text(newYorkData.list[8].wind.speed + " MPH");
        $("#d1Humidity").text(newYorkData.list[8].main.humidity + " %");
        //Day Two
        $("#d2Date").text(newYorkData.list[16].dt_txt);
        $("#d2Temp").text(newYorkData.list[16].main.temp + " °F");
        $("#d2Wind").text(newYorkData.list[16].wind.speed + " MPH");
        $("#d2Humidity").text(newYorkData.list[16].main.humidity + " %");
        //Day Three
        $("#d3Date").text(newYorkData.list[24].dt_txt);
        $("#d3Temp").text(newYorkData.list[24].main.temp + " °F");
        $("#d3Wind").text(newYorkData.list[24].wind.speed + " MPH");
        $("#d3Humidity").text(newYorkData.list[24].main.humidity + " %");
        //Day Four
        $("#d4Date").text(newYorkData.list[32].dt_txt);
        $("#d4Temp").text(newYorkData.list[32].main.temp + " °F");
        $("#d4Wind").text(newYorkData.list[32].wind.speed + " MPH");
        $("#d4Humidity").text(newYorkData.list[32].main.humidity + " %");
        //Day Five
        $("#d5Date").text(newYorkData.list[39].dt_txt);
        $("#d5Temp").text(newYorkData.list[39].main.temp + " °F");
        $("#d5Wind").text(newYorkData.list[39].wind.speed + " MPH");
        $("#d5Humidity").text(newYorkData.list[39].main.humidity + " %");
      
    });
    
   }  
    



atlantaGetApi()
atlantaBtnEl.addEventListener("click", atlantaGetApi);
denverBtnEl.addEventListener("click", denverGetApi);
seattleBtnEl.addEventListener("click", seattleGetApi);
sanFranciscoEl.addEventListener("click", sanFranciscoGetApi);
orlandoEl.addEventListener("click", orlandoGetApi);
newYorkEl.addEventListener("click", newYorkGetApi);
chicagoEl.addEventListener("click", chicagoGetApi);
austinEl.addEventListener("click",austinGetApi);
  
