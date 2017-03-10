/* global google */
/* import KnockoutJS and SlideoutJS as dependencies. */
import Knockout from 'knockout';
import GoogleMapUtil from './GoogleMapUtil';
import markersData from './MarkerData.json';

/* Create a new map */
const map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 50.8237,
    lng: -0.141,
  },
  zoom: 16,
  disableDefaultUI: true,
  zoomControl: true,
});

const infoWindow = new google.maps.InfoWindow();
/* const markers = GoogleMapUtil.drawMarkers(map, markersData.markers, infoWindow); */

/* Define a *viewmodel* for both the data and behavior of your UI */
function ViewModel() {
  const self = this;

  /* Data */
  self.filters = Knockout.observableArray(markersData.filters);
  self.filter = Knockout.observable('');
  self.myMarkers = Knockout.observableArray(GoogleMapUtil.drawMarkers(map,
    markersData.markers, infoWindow));
  self.filteredItems = Knockout.computed(() => {
    const filter = self.filter();
    /* If there's no filter currently set, or it's set to all, set all markers
     * visable and return */
    if (!filter || filter === 'All') {
      Knockout.utils.arrayForEach(self.myMarkers(), (marker) => {
        marker.setVisible(true);
      }); return self.myMarkers();
    }
    /* Iterate through markers, checking . Return a filtered list of cafes. */
    return Knockout.utils.arrayFilter(self.myMarkers(), (marker) => {
      for (const brew of marker.brews) {
        if (brew === filter) { marker.setVisible(true); return true; }
      } marker.setVisible(false);
    });
  });
}

// Activates knockout.js
Knockout.applyBindings(new ViewModel());
