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
  self.myMarkers = Knockout.observableArray(GoogleMapUtil.drawMarkers(map,
    markersData.markers, infoWindow));
  self.filters = Knockout.observableArray(markersData.filters);
  self.filter = Knockout.observable('');

  self.filteredItems = Knockout.computed(() => {
    const filter = self.filter();

    if (!filter || filter === 'All') {
      console.log('There is not filter selected, or All');
      return self.myMarkers();
    }
    console.log(`You selected ${filter}`);
    return Knockout.utils.arrayFilter(self.myMarkers(), i => i.type === filter);
  });
}

// Activates knockout.js
Knockout.applyBindings(new ViewModel());
