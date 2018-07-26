// this is our hike data
var locations = [
    ['Fullersburg Woods', 41.8266548, -87.93220009999999, "http://www.dupageforest.org/places-to-go/forest-preserves/fullersburg-woods " , "https://cdn2.hubspot.net/hubfs/2920355/Places-to-Go/Documents/Forest-Preserves/Fullersburg-Woods-Trails-Guide-2017.pdf?t=1528217538568"],
    ['Little Red School House Nature Center', 41.7089669, -87.87716069999999, "http://fpdcc.com/nature-centers/little-red-schoolhouse-nature-center/ ", "https://map.fpdcc.com/#/?poi=319-Little+Red+Schoolhouse+Nature+Center"],
    ['Starved Rock State Park', 41.3508119, -88.84122539999998, "http://www.starvedrockstatepark.org/ ", "https://www.starvedrockstatepark.org/wp-content/uploads/TrailMap_11x17-2018.pdf"],
    ['Morton Arboretum', 41.8163563, -88.0691635, "http://www.mortonarb.org/ ", "http://www.mortonarb.org/files/16MRK_HikingMap_112116_OPTIM.pdf"],
    ['Shabbona State Park', 41.759148, -88.8699532, "https://shabbonalake.com/ ", "http://shabbonalake.com/"],
    ['Maple Grove', 41.7946368, -88.02769380000001, "http://www.dupageforest.org/places-to-go/forest-preserves/maple-grove ", "https://cdn2.hubspot.net/hubfs/2920355/Places-to-Go/Documents/Forest-Preserves/Maple-Grove-Trails-Guide-2017.pdf?t=1528217538568"],
    ['Waterfall Glen Forest Preserve', 41.7505384, -87.9758569, "http://www.dupageforest.org/places-to-go/forest-preserves/waterfall-glen ", "https://www.dupageforest.org/hubfs/Places-to-Go/Documents/Forest-Preserves/Waterfall-Glen-Trails-Guide-2017.pdf?t=1527873634916"]
];

		
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
   }


