
// // this is our hike data
// var locations = [
//     ['Fullersburg Woods', 41.8266548, -87.93220009999999, "http://www.dupageforest.org/places-to-go/forest-preserves/fullersburg-woods " , "https://cdn2.hubspot.net/hubfs/2920355/Places-to-Go/Documents/Forest-Preserves/Fullersburg-Woods-Trails-Guide-2017.pdf?t=1528217538568"],
//     ['Little Red School House Nature Center', 41.7089669, -87.87716069999999, "http://fpdcc.com/nature-centers/little-red-schoolhouse-nature-center/ ", "https://map.fpdcc.com/#/?poi=319-Little+Red+Schoolhouse+Nature+Center"],
//     ['Starved Rock State Park', 41.3508119, -88.84122539999998, "http://www.starvedrockstatepark.org/ ", "https://www.starvedrockstatepark.org/wp-content/uploads/TrailMap_11x17-2018.pdf"],
//     ['Morton Arboretum', 41.8163563, -88.0691635, "http://www.mortonarb.org/ ", "http://www.mortonarb.org/files/16MRK_HikingMap_112116_OPTIM.pdf"],
//     ['Shabbona State Park', 41.759148, -88.8699532, "https://shabbonalake.com/ ", "http://shabbonalake.com/"],
//     ['Maple Grove', 41.7946368, -88.02769380000001, "http://www.dupageforest.org/places-to-go/forest-preserves/maple-grove ", "https://cdn2.hubspot.net/hubfs/2920355/Places-to-Go/Documents/Forest-Preserves/Maple-Grove-Trails-Guide-2017.pdf?t=1528217538568"],
//     ['Waterfall Glen Forest Preserve', 41.7505384, -87.9758569, "http://www.dupageforest.org/places-to-go/forest-preserves/waterfall-glen ", "https://www.dupageforest.org/hubfs/Places-to-Go/Documents/Forest-Preserves/Waterfall-Glen-Trails-Guide-2017.pdf?t=1527873634916"]
// ];

// function pageLoad() {
//     for (var i=0; i <= locations.length; i++) {
//         console.log(locations[i][0])
//         $("#hikes-text").append("<div class='hikes-text-info'><span class='icon fas fa-tree'></span>&nbsp;" + locations[i][0] + "<div class='trail-sub-text'><a class='ghost-link' href=javascript:showHikeMarker(" + locations[i][1] + "," + locations[i][2] + ")>View on map</a><a class='ghost-link' target='_blank' href=" + locations[i][3] + ">Get more info</a><a class='ghost-link' target='_blank' href=" + locations[i][4] + ">See trail map</a><br></div></div>");
//     }
// }

// pageLoad();

// function showHikeMarker(latitude, longitude) {
//       // The location of Uluru
//   var uluru = {lat: latitude, lng: longitude}; // uluru should = loc lat and long of clicked hike
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 10, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

// var kidsHikeMap = $("#kidsHikesMap");
// var forestPresMap = $("#forestPresMap");

// $(kidsHikeMap).on("submit", initMap);
// $(forestPresMap).on("submit", renderForestPresMap);

// function renderForestPresMap() {
//     var uluru = {lat: 27.56, lng: -80}; // uluru should = loc lat and long of clicked hike
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 10, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
// };



// function initMap() {
//     var marker;


//     // The location of Uluru
//     var uluru = {lat: locations[3][1], lng: locations[3][2]};

//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 8, center: uluru});
//     // The marker, positioned at Uluru
//     for (i = 0; i < locations.length; i++) {  
//         marker = new google.maps.Marker({
//           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//           map: map
//         });

//         google.maps.event.addListener(marker, 'click', (function(marker, i) {
//           return function() {
//             infowindow.setContent(locations[i][0]);
//             infowindow.open(map, marker);
//           }
//         })(marker, i));
//     }
//   }





(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height();
				}
			});

		// Menu.
			$('#menu')
				.append('<a href="#menu" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);