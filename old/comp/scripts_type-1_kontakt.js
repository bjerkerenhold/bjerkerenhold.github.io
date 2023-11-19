(function($, _) {
	var isNotEmptyString = function(str) {
		if (_.isString(str)) {
			return str.trim().length;
		}
		return 0;
	};

	var init = function($mapWrapper){
		var maxZoom    = 17,
			$mapCanvas   = $mapWrapper.find('.fw-map-canvas'),
			mapCanvasOY  = isNaN(parseInt($mapWrapper.data('map-height'))) ? parseInt($mapCanvas.width() * 0.66) : parseInt($mapWrapper.data('map-height')),
			locations    = $mapWrapper.data('locations'),
			mapType      = $mapWrapper.data('map-type'),
			disableScroll = ($mapWrapper.data('disable-scrolling') ? true : false),
			mapOptions   = {
				center: ( 'undefined' !== locations && locations.length) ? calculateCenter(locations) :  new google.maps.LatLng(-34, 150),
				mapTypeId: google.maps.MapTypeId[mapType],
				scrollwheel: disableScroll,
				styles: //[
				// 	{
				// 		"featureType": "all",
				// 		"elementType": "labels.text.fill",
				// 		"stylers": [
				// 			{
				// 				"weight": "0.01"
				// 			},
				// 			{
				// 				"color": "#606a7e"
				// 			},
				// 			{
				// 				"saturation": "10"
				// 			},
				// 			{
				// 				"lightness": "0"
				// 			},
				// 			{
				// 				"gamma": "1.00"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "all",
				// 		"elementType": "labels.text.stroke",
				// 		"stylers": [
				// 			{
				// 				"visibility": "on"
				// 			},
				// 			{
				// 				"color": "#3e606f"
				// 			},
				// 			{
				// 				"weight": 2
				// 			},
				// 			{
				// 				"gamma": 0.84
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "all",
				// 		"elementType": "labels.icon",
				// 		"stylers": [
				// 			{
				// 				"visibility": "off"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "administrative",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"weight": 0.6
				// 			},
				// 			{
				// 				"color": "#212b3f"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "administrative",
				// 		"elementType": "labels.text",
				// 		"stylers": [
				// 			{
				// 				"weight": "0.01"
				// 			},
				// 			{
				// 				"color": "#606a7e"
				// 			},
				// 			{
				// 				"saturation": "10"
				// 			},
				// 			{
				// 				"lightness": "11"
				// 			},
				// 			{
				// 				"gamma": "1.00"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "landscape",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#2a3448"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "landscape.natural.terrain",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"lightness": "-1"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "poi",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#222c40"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "poi.attraction",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"saturation": "0"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "poi.business",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"saturation": "0"
				// 			},
				// 			{
				// 				"lightness": "0"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "poi.park",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#2a3448"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "poi.park",
				// 		"elementType": "labels.text",
				// 		"stylers": [
				// 			{
				// 				"color": "#606a7e"
				// 			},
				// 			{
				// 				"gamma": "1"
				// 			},
				// 			{
				// 				"weight": "0.01"
				// 			},
				// 			{
				// 				"lightness": "11"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "road",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#222c40"
				// 			},
				// 			{
				// 				"lightness": -37
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "road.highway",
				// 		"elementType": "labels.text",
				// 		"stylers": [
				// 			{
				// 				"color": "#606a7e"
				// 			},
				// 			{
				// 				"weight": "0.01"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "transit",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#222c40"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "water",
				// 		"elementType": "geometry",
				// 		"stylers": [
				// 			{
				// 				"color": "#222c40"
				// 			}
				// 		]
				// 	},
				// 	{
				// 		"featureType": "water",
				// 		"elementType": "labels.text",
				// 		"stylers": [
				// 			{
				// 				"color": "#606a7e"
				// 			}
				// 		]
				// 	}
				// ]
									[
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#606a7e"
      },
      {
        "saturation": "10"
      },
      {
        "lightness": "0"
      },
      {
        "gamma": "1.00"
      },
      {
        "weight": "0.01"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#3e606f"
      },
      {
        "gamma": 0.84
      },
      {
        "visibility": "on"
      },
      {
        "weight": 2
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212b3f"
      },
      {
        "weight": 0.6
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#606a7e"
      },
      {
        "saturation": "10"
      },
      {
        "lightness": "11"
      },
      {
        "gamma": "1.00"
      },
      {
        "weight": "0.01"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2a3448"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#6b80a9"
      }
    ]
  },
  {
    "featureType": "landscape.natural.terrain",
    "elementType": "geometry",
    "stylers": [
      {
        "lightness": "-1"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#222c40"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "color": "#222c40"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#222c40"
      },
      {
        "lightness": -37
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#606a7e"
      },
      {
        "weight": "0.01"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#222c40"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#222c40"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#606a7e"
      }
    ]
  }
]
			},
			markerBounds = new google.maps.LatLngBounds(),
			map          = new google.maps.Map($mapCanvas.get(0), mapOptions);

			if ('undefined' !== locations && locations.length) {
				locations.forEach(function(location){
					gMapsCoords = new google.maps.LatLng(location.coordinates.lat, location.coordinates.lng);

					var marker = new google.maps.Marker({
						position: gMapsCoords,
						map: map,
						icon: php_vars.path + 'marker_type-1.png'
					});
					markerBounds.extend(gMapsCoords);

					//set content InfoWindow template
					if ( isNotEmptyString(location.description) || isNotEmptyString(location.title) || isNotEmptyString(location.url) || isNotEmptyString(location.thumb) ) {

						var template = _.template(
							"<% function isNotEmptyString(str) { if (_.isString(str)) {	return str.trim().length;} return 0; }  %>" +

								"<div class='infowindow'>" +

									"<% if (isNotEmptyString(location.thumb)) { %>" +
										"<div class='infowindow-thump'>" +
											"<img src='<%= location.thumb %>' >" +
										"</div> " +
									"<% } %>" +

									"<div class='infowindow-content'>" +
										"<% if ( isNotEmptyString(location.url) || isNotEmptyString(location.title) ) { %>" +
											"<div class='infowindow-title'>" +
												"<% if ( isNotEmptyString(location.url) ) { %><a href='<%- location.url %>'><% } %><%- isNotEmptyString(location.title) ?  location.title : location.url  %><% if ( isNotEmptyString(location.url) ) { %></a><% } %>" +
											"</div>" +
										"<% } %>" +
										"<% if ( isNotEmptyString(location.description) ) { %>"+
											"<div class='infowindow-description'>" +
												"<%= location.description %>" +
											"</div>" +
										"<% } %>" +
									"</div>" +

								"</div>");

						var infowindow = new google.maps.InfoWindow({
							content: template({location: location})
						});

						google.maps.event.addListener(marker, 'click', function() {
							infowindow.open(map,marker);
						});
					}
				});
			}

			//change "zoom"
			map.fitBounds(markerBounds);

			//change zoom to max zoom
			var listener = google.maps.event.addListenerOnce(map, 'zoom_changed', function() {
				if (map.getZoom() > maxZoom) map.setZoom(maxZoom);
				google.maps.event.removeListener(listener);
			});

			$mapCanvas.height(mapCanvasOY);
			$mapCanvas.data('map', map);
	};

	var calculateCenter = function(locations) {
		var Lng,Hyp,Lat,
			total = locations.length,
			X = 0,
			Y = 0,
			Z = 0;

		locations.forEach(function(location){
			var lat = location.coordinates.lat * Math.PI / 180,
				lng = location.coordinates.lng * Math.PI / 180,
				x = Math.cos(lat) * Math.cos(lng),
				y = Math.cos(lat) * Math.sin(lng),
				z = Math.sin(lat);

			X += x;
			Y += y;
			Z += z;
		});

		X /= total;
		Y /= total;
		Z /= total;

		Lng = Math.atan2(Y, X);
		Hyp = Math.sqrt(X * X + Y * Y);
		Lat = Math.atan2(Z, Hyp);

		return { lng: (Lng * 180 / Math.PI), lat: (Lat * 180 / Math.PI) };
	};

	$(document).ready(function(){
		$('.fw-map').each(function(){
			init($(this));
		});
	});

}(jQuery, _));

