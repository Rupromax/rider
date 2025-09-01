// google map api key: AIzaSyAEkuA2DnlE4Cxam03X_5XGBSplC7-3U2Y
// weather api key: d0be9498081f4180b6a133549230209

const apiKey = 'd0be9498081f4180b6a133549230209';

const temperatureElement = document.getElementById('temperature');

// Function to get the user's location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        alert('Geolocation is not supported by your browser.');
    }
}

// Function to get weather data from WeatherAPI.com
function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3&lang=zh_tw`;

    GetCityByGoogleMap();

    // 2. get weather info
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // 1. display temperture
            temperatureElement.innerHTML = `${data.current.temp_c}°C`;

            // 2. display weather icon
            // const weatherIconUrl = data.current.condition.icon;
            // const weatherIconElement = document.getElementById('weather-icon');
            // const iconImage = document.createElement('img');
            // iconImage.src = weatherIconUrl;
            // iconImage.alt = 'Weather Icon';
            // weatherIconElement.appendChild(iconImage);

            // 3. check if api works
            console.info (`${data.forecast.forecastday[0].day.avgtemp_c}°C`);

        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

// Function to initialize the map and get the user's city name
function GetCityByGoogleMap() {
    // Check if geolocation is available in the browser
    if ("geolocation" in navigator) {
        // Get the user's geolocation
        navigator.geolocation.getCurrentPosition(function (position) {
            // Create a LatLng object using the user's coordinates
            var userLatLng = new google.maps.LatLng(
                position.coords.latitude,
                position.coords.longitude
            );

            // Create a Geocoder object to get location information
            var geocoder = new google.maps.Geocoder();

            console.info("Geocoder running: ");

            // Use the Geocoder to get the user's city name
            geocoder.geocode({ location: userLatLng }, function (results, status) {
                if (status === "OK") {
                    console.info("Geocoder status: ok");

                    // Extract the city name from the results
                    for (var m = 0; m < results.length; m++) {
                        var addressComponents = results[m].address_components;
                        for (var i = 0; i < addressComponents.length; i++) {
                            var component = addressComponents[i];
                            if (component.types.includes("locality") && component.types.includes("political")) {
                                // Display the city name in the HTML element
                                document.getElementById("city").textContent = component.long_name;

                                console.info("city");
                                return component.long_name;
                                break;
                            }
                            console.info("addressComponents:" + `${i}`);
                        }
                    }
                } else {
                    console.error("Geocoder failed due to:" + status);
                }
            });
        });
    } else {
        console.error("Geolocation is not available in this browser.");
    }
}

function onLoads() {
    getLocation();
}

// Call the getLocation function when the page loads
window.onload = onLoads;
