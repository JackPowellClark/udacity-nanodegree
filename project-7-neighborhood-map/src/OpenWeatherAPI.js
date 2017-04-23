/* Singleton class encapsulating helper methods for FourSquare */
import $ from 'jquery';

export default class OpenWeatherAPI {
  static getCurrentWeather(arrayOfMarkerData) {
    const data = arrayOfMarkerData;
    const OAUTH_TOKEN = 'fb240dd7f498924f08e26dad43af986f';
    var i = 0;

    for (const markerInfo of data) {
      const lat = markerInfo.position.lat;
      const lng = markerInfo.position.lng;
      const dsURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${OAUTH_TOKEN}`;

      $.ajax({
        url: dsURL,
        type: 'GET',
        dataType: 'json',
      }).done((response) => {
        const currentSummary = response.weather[0].description;
        markerInfo.currentWeather = currentSummary;
        i++;

        if (i == arrayOfMarkerData.length) {
          window.drawMap();
        }
      }).fail(() => {
        alert(`There was an error with the Open Weather API for location: ${markerInfo.title}. Please try again.`);
      });
    }
    return data;
  }
}
