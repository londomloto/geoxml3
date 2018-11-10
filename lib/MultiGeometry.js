/**
 * A MultiGeometry object that will allow multiple polylines in a MultiGeometry
 * containing LineStrings to be treated as a single object
 *
 * @param {array} multiGeometryOptions anonymous object. Available properties:
 *  map: The map on which to attach the MultiGeometry
 *  paths: the individual polylines
 *  polylineOptions: options to use when constructing all the polylines
 *
 * @constructor
 */
function MultiGeometry(multiGeometryOptions) {
  function createPolyline(polylineOptions, mg) {
    var polyline = new google.maps.Polyline(polylineOptions);
    google.maps.event.addListener(polyline, 'click', function (evt) {
      google.maps.event.trigger(mg, 'click', evt);
    });
    google.maps.event.addListener(polyline, 'dblclick', function (evt) {
      google.maps.event.trigger(mg, 'dblclick', evt);
    });
    google.maps.event.addListener(polyline, 'mousedown', function (evt) {
      google.maps.event.trigger(mg, 'mousedown', evt);
    });
    google.maps.event.addListener(polyline, 'mousemove', function (evt) {
      google.maps.event.trigger(mg, 'mousemove', evt);
    });
    google.maps.event.addListener(polyline, 'mouseout', function (evt) {
      google.maps.event.trigger(mg, 'mouseout', evt);
    });
    google.maps.event.addListener(polyline, 'mouseover', function (evt) {
      google.maps.event.trigger(mg, 'mouseover', evt);
    });
    google.maps.event.addListener(polyline, 'mouseup', function (evt) {
      google.maps.event.trigger(mg, 'mouseup', evt);
    });
    google.maps.event.addListener(polyline, 'rightclick', function (evt) {
      google.maps.event.trigger(mg, 'rightclick', evt);
    });
    return polyline;
  }

  this.setValues(multiGeometryOptions);
  this.polylines = [];

  for (var i = 0; i < this.paths.length; i++) {
    var polylineOptions = multiGeometryOptions;
    polylineOptions.path = this.paths[i];
    var polyline = createPolyline(polylineOptions, this);
    // Bind the polyline properties to the MultiGeometry properties
    this.polylines.push(polyline);
  }
}
MultiGeometry.prototype = new google.maps.MVCObject();
MultiGeometry.prototype.changed = function (key) {
  if (this.polylines) {
    for (var i = 0; i < this.polylines.length; i++) {
      this.polylines[i].set(key, this.get(key));
    }
  }
};
MultiGeometry.prototype.setMap = function (map) {
  this.set('map', map);
};
MultiGeometry.prototype.getMap = function () {
  return this.get('map');
};

module.exports = MultiGeometry;
