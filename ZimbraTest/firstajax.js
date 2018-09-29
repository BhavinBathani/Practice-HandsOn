// Import stylesheets
//import './style.css';

var Weather = function(){
  this.loadMask = document.getElementById('loadMask');
  this.cityName = document.getElementById('cityName');
  this.temperature = document.getElementById('temperature');
  this.weatherPic = document.getElementById('weatherPic');
  this.weatherWord = document.getElementById('weatherWord');
};

/**
 * Function to make request to get data from server.
 * @param {String} requestUrl The url to locate required data.
 * @return {Promise} Promise object returned by fetch method.
 */
Weather.prototype.fetchData = function(requestUrl) {
  // Make request to given url
  return fetch(requestUrl).then(function(response){
   // Create and return Promise intance with parsed JSON data
   return Promise.resolve(response.json(), this);
  });
};

/**
 * Function to get latitude and longitude.
 * @return {Promise} Promise object returned by fetch method.
 */
Weather.prototype.fetchLongLat = function() {
  return this.fetchData('https://weathersync-zimbra.herokuapp.com/ip');
};

/**
 * Function to get weather information based on location dara.
 * @param {Object} location The object containing location values.
 * @return {Promise} Promise object returned by fetch method.
 */
Weather.prototype.fetchWeather = function(location) {
  var requestUrl = 'https://weathersync101.herokuapp.com/weather/' + location.latitude + ',' + location.longitude;
  return this.fetchData(requestUrl);
};

/**
 * Helper function to hide loadMask and show necessary components.
 */
Weather.prototype.hideLoadMask = function() {
   // Make elements visible as we have required data now.
  this.loadMask.style.display = 'none';
  this.cityName.style.visibility = 'visible';
  this.temperature.style.visibility = 'visible';
  this.weatherPic.style.visibility = 'visible';
  this.weatherWord.style.visibility = 'visible';
};

/**
 * Function which is responsible to update UI with fetched data.
 * @param {Object} weatherData The object containing weather values.
  */
Weather.prototype.updateUI = function(weatherData) {
  this.hideLoadMask();

  // Update the elements with respective data
  this.cityName.innerHTML = weatherData.name;
  this.temperature.innerHTML = (((weatherData.main.temp - 273.15) * 1.8) + 32).toFixed(2) + " &#8457;";
  this.weatherPic.src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  this.weatherWord.innerHTML = weatherData.weather[0].main;
};

/**
 * Function which called once page loading gets completed.
 */
function onWeatherAppLoad() {
  var myWeather = new Weather();
  // First, get latitude and longitude
  myWeather.fetchLongLat().then(function(parsedObject) {
    // Now, we have latitude and longitude, get the weather information
    myWeather.fetchWeather(parsedObject.location).then(function(weatherData){
      // weather data arrived, update the UI components
      myWeather.updateUI(weatherData);
    });
  });
}


// Register for the 'onload' event of the window global
window.onload = onWeatherAppLoad;