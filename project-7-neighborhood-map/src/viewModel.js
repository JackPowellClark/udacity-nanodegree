/* global google */
/* import KnockoutJS, GoogleMapUtil.js, and markerData as dependencies. */
import KO from 'knockout';
import GoogleMapUtil from './GoogleMapUtil';
import OpenWeatherAPI from './OpenWeatherAPI';
import markersData from './MarkerData.json';

let markersDataWithWeather;
let map; let infoWindow;

/* Create an initialised map and info window */
window.initToWinIt = function initToWinIt() {
  markersDataWithWeather = OpenWeatherAPI.getCurrentWeather(markersData.markers);
};

window.drawMap = function drawMap() {
  map = GoogleMapUtil.initMap('map', { lat: 50.8237, lng: -0.140 });
  infoWindow = new google.maps.InfoWindow();
  KO.applyBindings(new ViewModel());
};

window.errorHandler = function errorHandler() {
  alert('Google Maps failed to load. Please try again.');
};

/* Define a viewmodel for both the data and behavior of the UI */
function ViewModel() {
  const self = this;

  /* Data (model) */
  self.filter = KO.observable('');
  self.filters = KO.observableArray(markersData.filters);
  self.myMarkers = KO.observableArray(GoogleMapUtil.drawMarkers(map,
    markersDataWithWeather, infoWindow));

  self.filteredItems = KO.computed(() => {
    const filter = self.filter();
    /* If there's no filter currently set, or it's set to all, set all markers
     * visable and return */
    if (!filter || filter === 'All') {
      KO.utils.arrayForEach(self.myMarkers(), (marker) => {
        marker.setVisible(true);
      }); return self.myMarkers();
    }
    /* Iterate through markers, checking . Return a filtered list of cafes. */
    return KO.utils.arrayFilter(self.myMarkers(), (marker) => {
      for (const brew of marker.brews) {
        if (brew === filter) { marker.setVisible(true); return true; }
      }
      marker.setVisible(false);
    });
  });
}

/* Create an initialised map and info window */
// initToWinIt();
