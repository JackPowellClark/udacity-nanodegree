/* Singleton class encapsulating helper methods for Google Maps */
export default class GoogleMapUtil {

  /* Create and return a new map */
  static initMap(element, position) {
    return new google.maps.Map(document.getElementById(element), {
      center: position,
      zoom: 16,
      disableDefaultUI: true,
      zoomControl: true,
    });
  }

  /* Given a map and array of marker data, add each marker and return all */
  static drawMarkers(map, arrayOfMarkerData, infoWindow) {
    const markers = [];

    /* Iterate over each marker in the given array of marker data */
    for (const markerInfo of arrayOfMarkerData) {
      const marker = this.createMarker(map, markerInfo.position,
        markerInfo.title, markerInfo.content, markerInfo.brews);

      /* Give each marker a function to display information */
      marker.displayInfo = function () {
        GoogleMapUtil.animateMarker(marker);
        GoogleMapUtil.populateInfoWindow(map, marker, infoWindow);
      };
      /* Invoke the above function if marker is clicked */
      marker.addListener('click', () => {
        marker.displayInfo();
      });

      /* Ensure each new marker is added to array 'markers' */
      markers.push(marker);
    }
    return markers;
  }

  /* Create a new marker */
  static createMarker(map, position, title, content, brews) {
    return new google.maps.Marker({
      map,
      position,
      title,
      content,
      brews,
    });
  }

  /* Given a marker, add a single bounce animation */
  static animateMarker(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(() => {
      marker.setAnimation(null);
    }, 700);
  }

  /* Given a marker, create and populate an info window */
  static populateInfoWindow(map, marker, infoWindow) {
    infoWindow.marker = marker;
    infoWindow.setContent(`
      <div style="text-align: center; font-weight: bold;"> ${marker.title} </div>
      <p> ${marker.content} </p>
    `);
    infoWindow.open(map, marker);
  }
}
