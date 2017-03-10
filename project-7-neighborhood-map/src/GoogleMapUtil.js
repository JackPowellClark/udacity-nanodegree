/* global google */

/* Some information about GoogleMap  */
export default class GoogleMapUtil {
  /* Given a map and array of marker data, add each and return all */
  static drawMarkers(map, arrayOfMarkerData, infoWindow) {
    const markers = [];

    for (const markerInfo of arrayOfMarkerData) {
      const marker = this.createMarker(map, markerInfo.position,
        markerInfo.title, markerInfo.content, markerInfo.brews);

      marker.animateAndInfo = function () {
        GoogleMapUtil.animateMarker(marker);
        GoogleMapUtil.populateInfoWindow(map, marker, infoWindow);
      };

      marker.addListener('click', () => {
        marker.animateAndInfo();
      });
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

  /* Given a marker, create and popular an info window */
  static populateInfoWindow(map, marker, infoWindow) {
    infoWindow.marker = marker;
    infoWindow.setContent(`
      <div style="text-align: center; font-weight: bold;"> ${marker.title} </div>
      <p> ${marker.content} </p>
    `);
    infoWindow.open(map, marker);
  }
}
