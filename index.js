            // DOM Elements
const themeIcon = document.getElementById("themeIcon");
const hourOfTheDay = document.getElementById("hourOfTheDay");
const weatherDisplay = document.getElementById("weather");
const colorPicker = document.getElementById("accentColorPicker");

// Variables
let isDarkTheme = localStorage.getItem("theme") === "dark";

// Get day and hour elements
const weekdays = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(id => document.getElementById(id));
const hourElements = [12, 13, 14, 15, 16, 17, 18].map(h => document.getElementById(h.toString()));

// Initialize page on load
function initPage() {
    // Apply saved theme
    if (isDarkTheme) {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
    
    // Apply saved accent color
    const savedColor = localStorage.getItem("accentColor");
    if (savedColor) {
        document.documentElement.style.setProperty("--accent-color", savedColor);
        colorPicker.value = savedColor;
    }
    
    // Set current day highlight
    const dayOfWeek = new Date().getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        weekdays[dayOfWeek].classList.add("current-day");
    }
    
    // Initialize time and weather
    updateTime();
    getWeather();
    
    // Set up event listeners
    setupEventListeners();
}

// Update the time and highlight current hour/cell
function updateTime() {
    const date = new Date();
    const currentHour = date.getHours();
    const formattedMinutes = String(date.getMinutes()).padStart(2, "0");
    
    hourOfTheDay.textContent = `${currentHour}:${formattedMinutes}`;
    
    // Reset previous highlights
    hourElements.forEach(hour => hour.classList.remove("current-hour"));
    document.querySelectorAll("td").forEach(cell => cell.classList.remove("current-cell"));
    
    // Set hour highlight if within schedule hours
    if (currentHour >= 12 && currentHour <= 18) {
        document.getElementById(currentHour.toString()).classList.add("current-hour");
        
        // Highlight current cell if within weekday
        const dayOfWeek = date.getDay();
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            const cellId = `d${dayOfWeek}h${currentHour}`;
            const currentCell = document.getElementById(cellId);
            if (currentCell) {
                currentCell.classList.add("current-cell");
            }
        }
    }
}

// Theme toggle
function changeTheme() {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-sun", "fa-moon");
    } else {
        document.body.removeAttribute("data-theme");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
    
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// Weather functions
function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeatherData, () => {
            weatherDisplay.innerHTML = "";
        });
    } else {
        weatherDisplay.innerHTML = "Geolocația nu este disponibilă în browser.";
    }
}

function fetchWeatherData(position) {
    const { latitude, longitude } = position.coords;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.current_weather.temperature;
            const weatherEmoji = getWeatherEmoji(data.current_weather.weathercode);
            const sunrise = data.daily.sunrise[0].split("T")[1].slice(0, 5);
            const sunset = data.daily.sunset[0].split("T")[1].slice(0, 5);
            
            weatherDisplay.innerHTML = `
                <div class="weather-main">
                    <span>${temperature}°C</span>
                    <span>${weatherEmoji}</span>
                </div>
                <div class="sun-info">
                    <span>🌅 ${sunrise}</span>
                    <span>🌇 ${sunset}</span>
                </div>
            `;
        })
        .catch(() => {
            weatherDisplay.innerHTML = "Nu s-au putut încărca datele meteo.";
        });
}

function getWeatherEmoji(code) {
    const weatherCodes = {
        0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️",
        48: "❄️🌫️", 51: "🌧️", 53: "🌧️", 55: "🌧️",
        61: "🌦️", 63: "🌧️", 65: "🌧️🌧️", 71: "🌨️",
        73: "🌨️", 75: "❄️❄️", 95: "⛈️", 96: "⛈️🌨️"
    };
    return weatherCodes[code] || "🤷‍♂️";
}

// Set up all event listeners
function setupEventListeners() {
    // Subject highlighting
    document.querySelectorAll(".subject").forEach(subject => {
        subject.addEventListener("click", () => {
            const isMarked = subject.getAttribute("data-marked") === "true";
            if (!isMarked) {
                subject.innerHTML = "<mark>" + subject.innerHTML + "</mark>";
                subject.setAttribute("data-marked", "true");
            } else {
                subject.innerHTML = subject.innerHTML.replace("<mark>", "").replace("</mark>", "");
                subject.setAttribute("data-marked", "false");
            }
        });
    });
    
    // Color picker events
    colorPicker.addEventListener("input", e => {
        document.documentElement.style.setProperty("--accent-color", e.target.value);
    });
    
    colorPicker.addEventListener("change", e => {
        localStorage.setItem("accentColor", e.target.value);
    });
}

// Initialize page
initPage();

// Set up timer intervals
setInterval(updateTime, 10000);  // Update time every 10 seconds
setInterval(getWeather, 300000); // Update weather every 5 minutes
