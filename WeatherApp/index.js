function getWeather() {
    const apiKey = "63a90ae96d390ec37d6c1252f5a86e1a"; // Replace with your API key
    const city = document.getElementById('city').value;

    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp} °C`;
    description.textContent = `Description: ${data.weather[0].description}`;
}
