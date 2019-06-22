var markerData=[
	[55.748278, 37.607195],
	[55.756944, 37.626909],
	[55.758108, 37.583332],
	[55.743526, 37.579933]
];

ymaps.ready(init);
function init(){ 
var myMap = new ymaps.Map("map", {
center: [55.752796, 37.592751],
zoom: 13
});
	
myMap.behaviors.disable(['scrollZoom']);

for (let i = 0; i<markerData.length; i++){
	myPlacemark = new ymaps.Placemark(markerData[i], {
	}, {
		iconLayout: 'default#image',
		iconImageHref: './img/map_mark.png',
		iconImageSize: [46, 57],
		iconImageOffset: [-23, -57]
	}),
	
	myMap.geoObjects.add(myPlacemark)
	}
};