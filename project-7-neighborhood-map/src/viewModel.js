/* global google */
/* import KnockoutJS, GoogleMapUtil.js, and markerData as dependencies. */
import KO from 'knockout';
import GoogleMapUtil from './GoogleMapUtil';
import markersData from './MarkerData.json';

/* Create an initialised map and info window */
const map = GoogleMapUtil.initMap('map', { lat: 50.8237, lng: -0.1385 });
const infoWindow = new google.maps.InfoWindow();

/* Define a viewmodel for both the data and behavior of the UI */
function ViewModel() {
  const self = this;

  /* Data (model) */
  self.filter = KO.observable('');
  self.filters = KO.observableArray(markersData.filters);
  self.myMarkers = KO.observableArray(GoogleMapUtil.drawMarkers(map,
    markersData.markers, infoWindow));

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
      } marker.setVisible(false);
    });
  });
}

/* Activate knockout.js */
KO.applyBindings(new ViewModel());
