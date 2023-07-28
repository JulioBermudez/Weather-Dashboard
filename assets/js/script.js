var api =
  "https://api.openweathermap.org/data/2.5/forecast?q= &appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
api = api.split(" ");

//This function get the data from miami city and send it to dataManagement function
//The dataManagement function will print the data results in the HTML 
$(function(){
  fetch(api[0] + "miami" + api[1]).then(function(response){
    if (response.ok) {
      response.json().then(function (data){
        localStorage.setItem(data.city.id, JSON.stringify(data))
        dataManagement(data)
      })
    }
  })  
})

$("#submitBtn").on("click", function (event) {
  event.preventDefault();

  var cityName = $("#cityName").val().replace(" ", "%20");
  if (cityName) {
    fetch(api[0] + cityName + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagement(data);
          //Store the data inside local storage
            localStorage.setItem(data.city.id, JSON.stringify(data))
          //Save that data inside a variable and send it to dataManagement function 
            var localStorageData = JSON.parse(localStorage.getItem(data.city.id))
          //If the local storage key match with the id of the cities then print a button 
          //with the name of that city
            if (localStorageData.city.id === data.city.id) {
                
                $("#btnSelector").append(
                  '<button id="'+ localStorageData.city.id +'" class="btn btn-secondary mt-2" type="button">'+ localStorageData.city.name+'</button>');    
                  clickEvent(localStorageData)        
            } 
        });
      } else if (response.status !== 200) {
        alert("Please enter a valid City Name");
        return;
      } 
      //If i click on any button list and the id of that button and the key of local storage match
      //then will call the dataManagement function
       function clickEvent(localStorageData){
        $("#btnSelector").click(function (event) {
          event.stopPropagation();
          
          if ($(event.target).attr("id") == localStorageData.city.id) {
            dataManagement(localStorageData);
          };
        });
      }
      
    });
  } else {
    alert("Please enter a valid City Name");
  }
});

//Print all the data in HTML
function dataManagement(data, localStorage,) {
  for (let i = 0; i < 40; i += 8) {
    var nameCity = data.city.name;
    var date = data.list[i].dt_txt.replace("03:00:00", "");
    var icon = data.list[i].weather[0].icon;
    var tempData = data.list[i].main.temp + " °F";
    var speedData = data.list[i].wind.speed + " MPH";
    var humidityData = data.list[i].main.humidity + " %";
    //Current Day
    if (i === 0) {
      $("#cityNameDisplay").text(nameCity + " (" + date + ")");
      $("#currentWeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#temp").text(tempData);
      $("#wind").text(speedData);
      $("#humidity").text(humidityData);
      //Day 1
    } else if (i === 8) {
      $("#day1Date").text(date);
      $("#day1WeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#day1Temp").text(tempData);
      $("#day1Wind").text(speedData);
      $("#day1Humidity").text(humidityData);
      //Day 2
    } else if (i === 16) {
      $("#day2Date").text(date);
      $("#day2WeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#day2Temp").text(tempData);
      $("#day2Wind").text(speedData);
      $("#day2Humidity").text(humidityData);
      //Day 3
    } else if (i === 24) {
      $("#day3Date").text(date);
      $("#day3WeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#day3Temp").text(tempData);
      $("#day3Wind").text(speedData);
      $("#day3Humidity").text(humidityData);
      //Day 4
    } else if (i === 32) {
      $("#day4Date").text(date);
      $("#day4WeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#day4Temp").text(tempData);
      $("#day4Wind").text(speedData);
      $("#day4Humidity").text(humidityData);
      // Day 5
      $("#day5Date").text(data.list[39].dt_txt.replace("00:00:00", ""));
      $("#day5WeatherImg").attr(
        "src",
        "https://openweathermap.org/img/wn/" + icon + "@2x.png"
      );
      $("#day5Temp").text(data.list[39].main.temp + " °F");
      $("#day5Wind").text(data.list[39].wind.speed + " MPH");
      $("#day5Humidity").text(data.list[39].main.humidity + " %");
    }
  }
}





