mapboxgl.accessToken = 'pk.eyJ1IjoiYXJuYWJjaCIsImEiOiJja3lkMWEwNm0wdWt0MnhwYjliZXJkdDVxIn0.KwA0gP7eMffNrT6091NgHA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 1
});

function update_map() {
    console.log("Updating data every 2s")
    fetch("/data.json")
        .then(response => response.json())
        .then(prom => {
            prom.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                let cases = element.infected;
                if (cases > 255) {
                    color = "rgb(255,0,0)"
                } else {
                    color = `rgb(${cases},0,0)`
                }
                // mark on the map
                new mapboxgl.Marker({
                        draggable: false,
                        color: color
                    })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })

};

setInterval(update_map(), 2000);

update_map();