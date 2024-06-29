// Selecting DOM elements
const inputBox = document.querySelector('.input-box'); // Input box for entering location
const searchBtn = document.getElementById('searchBtn'); // Search button
const weather_img = document.querySelector('.weather-img'); // Image element for weather icon
const temperature = document.querySelector('.temperature'); // Element to display temperature
const description = document.querySelector('.description'); // Element to display weather description
const humidity = document.getElementById('humidity'); // Element to display humidity
const wind_speed = document.getElementById('wind-speed'); // Element to display wind speed

const location_not_found = document.querySelector('.location-not-found'); // Element to display if location not found
const weather_body = document.querySelector('.weather-body'); // Element containing weather details

// Function to fetch and display weather data
async function checkWeather(city) {
    // API key for accessing OpenWeatherMap API
    const api_key = "d5e765dfd2bbcc481748d084a00368b0";
    // API URL for fetching weather data based on the entered city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    // Fetch weather data from the API
    const weather_data = await fetch(`${url}`).then(response => response.json());

    // Check if the city is not found
    if (weather_data.cod === `404`) {
        // Display message for location not found
        location_not_found.style.display = "flex";
        // Hide weather details
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    // Hide message for location not found
    location_not_found.style.display = "none";
    // Display weather details
    weather_body.style.display = "flex";
    // Display temperature (converting from Kelvin to Celsius)
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    // Display weather description
    description.innerHTML = `${weather_data.weather[0].description}`;
    // Display humidity
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    // Display wind speed
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    // Set weather icon based on weather condition
    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/image/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/image/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/image/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/image/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/image/snow.png";
            break;
    }

    console.log(weather_data);
}

// Event listener for search button click
searchBtn.addEventListener('click', () => {
    // Call the checkWeather function with the value entered in the input box
    checkWeather(inputBox.value);
});
