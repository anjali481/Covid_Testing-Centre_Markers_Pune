// This example displays a marker in Pune.

const testingCenters=

{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.86709213256836,
            18.520225315274104
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.84393125772476,
            18.518264418446776
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.88936519622803,
            18.500366063396207
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.85698556900024,
            18.459358376662383
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            73.81359815597534,
            18.49485145670361
          ]
        }
      }
    ]
  }
  




function initMap() {
    const pune = { lat: 18.516036, lng: 73.856460 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: pune
    });
      const marker = new google.maps.Marker({
        position: pune,
        map,
        title: "Pune (India)"
    });

    navigator.geolocation.getCurrentPosition(position=>{
      //  map.setCenter({lat:position.coords.latitude,lng:position.coords.longitude});
    });

    for (const center of testingCenters.features){


        const centerMarker=new google.maps.Marker({


        position: {lat:center.geometry.coordinates[1],lng:center.geometry.coordinates[0]},

         icon:{

            path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale:3,
            strokeColor:"#0000FF",
         },
        map,
        title: "Pune (India)"
        });



        const centerCircle=new google.maps.Circle({


            strokeColor:"#000000",
            strokeOpacity:0.8,
            strokeWeight:1,
            fillColor:"#107e99",
            fillOpacity:0.25,
            map,
            center:{lat:center.geometry.coordinates[1],lng:center.geometry.coordinates[0]},
            radius:1000
        })
    }
}
