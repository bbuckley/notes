// Local weather
var url = "http://api.openweathermap.org/data/2.5/weather?zip=03842,us&APPID=82b744759cab9118bdc644ede0d21090";

var f;
var c;
var temp;

var getWeather = function(data) {
  f = Math.round(data.main.temp * 9/5 - 459.67,0);
  c = Math.round(data.main.temp - 273.15,0);
  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
  temp = f + " F";

  $("#icon").attr("src", icon);
  $("#weather-name").text(data.name);
  $("#weather-main").text(data.weather[0].main + ", " + data.weather[0].description);
  $("#weather-temp").text(temp);
  $("#weather-icon").text(icon);
  $("#weather-all").text(JSON.stringify(data));
};

$(document).ready(function() {
  $.getJSON(url, getWeather, 'jsonp');

  $("#toggle_f_c").click(function() {
    if(temp[temp.length-1] === "F"){
   	  temp = c + " C";
    } else {
      temp = f + " F";
    }
    $("#weather-temp").text(temp);
  });

});




