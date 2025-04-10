const apiKey = import.meta.env.VITE_API_KEY;

const weatherInfo = document.getElementById('weather-info');
const errorBox = document.getElementById('error-box');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');

async function getWeatherData(city) {
  try {
    if (!city) {
      throw new Error('Please enter a city name');
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${apiKey}`
    );

    if (response.status === 404) {
      throw new Error(
        'City not found. Please check the spelling and try again.'
      );
    } else if (response.status === 401) {
      throw new Error(
        'Invalid API key. Please check your API key configuration.'
      );
    } else if (!response.ok) {
      throw new Error('Failed to fetch weather data. Please try again later.');
    }

    const data = await response.json();
    displayWeather(data);
    errorBox.style.display = 'none';
    weatherInfo.style.display = 'block';
    cityInput.classList.remove('error');
  } catch (error) {
    errorBox.textContent = error.message;
    errorBox.style.display = 'block';
    weatherInfo.style.display = 'none';
    cityInput.classList.add('error');
  }
}

function displayWeather(data) {
  document.getElementById('city-name').textContent = data.name;
  document.getElementById('temperature').textContent = `${Math.round(
    data.main.temp
  )}°C`;
  document.getElementById('weather-desc').textContent =
    data.weather[0].description;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('wind-speed').textContent = `${data.wind.speed} m/s`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById('weather-icon').src = iconUrl;
}

searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  getWeatherData(city);
});

cityInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = cityInput.value.trim();
    getWeatherData(city);
  }
});

// Clear error when user starts typing
cityInput.addEventListener('input', () => {
  errorBox.style.display = 'none';
  cityInput.classList.remove('error');
});
