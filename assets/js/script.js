var api =
  "https://api.openweathermap.org/data/2.5/forecast?q= &appid=eca7da31468c16ddffa7abce668f3014&units=imperial";
api = api.split(" ");

$("#submitBtn").on("click", function (event) {
  event.preventDefault();

  var cityName = $("#cityName").val().replace(" ", "%20");
  if (cityName) {
    fetch(api[0] + cityName + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagement(data);
          console.log(data);
          
        });
      } else if (response.status !== 200) {
        alert("Please enter a valid City Name");
        return;
      }
      //create a dynamic button with the city name as search result
      $("#btnSelector").append(
        '<button id="' +
          cityName +
          '" class="btn btn-secondary mt-2" type="button">' +
          cityName.replace("%20", " ") +
          "</button>"
      );
        
      //When the dynamic button if clicked it will show the weather data
      // of the city name clicked
      $("#btnSelector").click(function (event) {
        event.stopPropagation();
      
        if ($(event.target).attr("id") == cityName) {
          fetch(api[0] + $(event.target).attr("id") + api[1]).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                dataManagement(data);
                console.log(cityName);
                console.log($(event.target).attr("id"));
              });
            };
          });
        };
      });
      /*-----------------------------------------------------------------------*/ 
    });
  } else {
    alert("Please enter a valid City Name");
  }
});

function dataManagement(data) {
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

/*


$("#btnSelector").click(function (event) {
  event.stopPropagation();

  if ($(event.target).attr("name") === "atlanta") {
    fetch(api[0] + cityName[0] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "denver") {
    fetch(api[0] + cityName[1] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "seattle") {
    fetch(api[0] + cityName[2] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "sanFrancisco") {
    fetch(api[0] + cityName[3] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "orlando") {
    fetch(api[0] + cityName[4] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "newYork") {
    fetch(api[0] + cityName[5] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "chicago") {
    fetch(api[0] + cityName[6] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
  } else if ($(event.target).attr("name") === "austin") {
    fetch(api[0] + cityName[7] + api[1]).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          dataManagment(data);
          console.log(data);
        });
      }
    });
   
  }

  function dataManagment(data) {
    for (let i = 0; i < 40; i += 8) {
      var icon = data.list[i].weather[0].icon;
      var tempData = data.list[i].main.temp + " °F";
      var speedData = data.list[i].wind.speed + " MPH";
      var humidityData = data.list[i].main.humidity + " %";
      //Current Day
      if (i === 0) {
        $("#cityName").text(data.city.name + " (" + data.list[0].dt + ")");
        $("#currentWeatherImg").attr(
          "src",
          "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        );
        $("#temp").text(tempData);
        $("#wind").text(speedData);
        $("#humidity").text(humidityData);
        //Day 1
      } else if (i === 8) {
        $("#day1WeatherImg").attr(
          "src",
          "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        );
        $("#day1Temp").text(tempData);
        $("#day1Wind").text(speedData);
        $("#day1Humidity").text(humidityData);
        //Day 2
      } else if (i === 16) {
        $("#day2WeatherImg").attr(
          "src",
          "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        );
        $("#day2Temp").text(tempData);
        $("#day2Wind").text(speedData);
        $("#day2Humidity").text(humidityData);
        //Day 3
      } else if (i === 24) {
        $("#day3WeatherImg").attr(
          "src",
          "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        );
        $("#day3Temp").text(tempData);
        $("#day3Wind").text(speedData);
        $("#day3Humidity").text(humidityData);
        //Day 4
      } else if (i === 32) {
        $("#day4WeatherImg").attr(
          "src",
          "https://openweathermap.org/img/wn/" + icon + "@2x.png"
        );
        $("#day4Temp").text(tempData);
        $("#day4Wind").text(speedData);
        $("#day4Humidity").text(humidityData);
        // Day 5
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
});
*/
