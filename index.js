const themeToggle = document.getElementById("switchTheme");
const themeIcon = document.getElementById("themeIcon");
let isDarkTheme = false;

const monday = document.getElementById("Monday");
const tuesday = document.getElementById("Tuesday");
const wednesday = document.getElementById("Wednesday");
const thursday = document.getElementById("Thursday");
const friday = document.getElementById("Friday");

const h12 = document.getElementById("12");
const h13 = document.getElementById("13");
const h14 = document.getElementById("14");
const h15 = document.getElementById("15");
const h16 = document.getElementById("16");
const h17 = document.getElementById("17");
const h18 = document.getElementById("18");

const d1h12 = document.getElementById("d1h12");
const d2h12 = document.getElementById("d2h12");
const d3h12 = document.getElementById("d3h12");
const d4h12 = document.getElementById("d4h12");
const d5h12 = document.getElementById("d5h12");

const d1h13 = document.getElementById("d1h13");
const d2h13 = document.getElementById("d2h13");
const d3h13 = document.getElementById("d3h13");
const d4h13 = document.getElementById("d4h13");
const d5h13 = document.getElementById("d5h13");

const d1h14 = document.getElementById("d1h14");
const d2h14 = document.getElementById("d2h14");
const d3h14 = document.getElementById("d3h14");
const d4h14 = document.getElementById("d4h14");
const d5h14 = document.getElementById("d5h14");

const d1h15 = document.getElementById("d1h15");
const d2h15 = document.getElementById("d2h15");
const d3h15 = document.getElementById("d3h15");
const d4h15 = document.getElementById("d4h15");
const d5h15 = document.getElementById("d5h15");

const d1h16 = document.getElementById("d1h16");
const d2h16 = document.getElementById("d2h16");
const d3h16 = document.getElementById("d3h16");
const d4h16 = document.getElementById("d4h16");
const d5h16 = document.getElementById("d5h16");

const d1h17 = document.getElementById("d1h17");
const d2h17 = document.getElementById("d2h17");
const d3h17 = document.getElementById("d3h17");
const d4h17 = document.getElementById("d4h17");
const d5h17 = document.getElementById("d5h17");

const d1h18 = document.getElementById("d1h18");
const d2h18 = document.getElementById("d2h18");
const d3h18 = document.getElementById("d3h18");
const d4h18 = document.getElementById("d4h18");
const d5h18 = document.getElementById("d5h18");

const hourOfTheDay = document.getElementById("hourOfTheDay");
const weatherDisplay = document.getElementById("weather");

const date = new Date();

// Set current day highlight
const dayOfWeek = date.getDay();
const weekdays = [null, monday, tuesday, wednesday, thursday, friday];

if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    weekdays[dayOfWeek].classList.add("current-day");
}

// Update the time and highlight current hour/cell
function updateTime() {
    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    const formattedMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    hourOfTheDay.textContent = `${currentHour}:${formattedMinutes}`;

    // Reset previous highlights
    const allHourElements = [h12, h13, h14, h15, h16, h17, h18];
    allHourElements.forEach((hour) => hour.classList.remove("current-hour"));

    // All cell elements
    const allCells = document.querySelectorAll("td");
    allCells.forEach((cell) => cell.classList.remove("current-cell"));

    // Set hour highlight
    if (currentHour >= 12 && currentHour <= 18) {
        document.getElementById(currentHour.toString()).classList.add("current-hour");

        // Highlight current cell if applicable
        if (dayOfWeek >= 1 && dayOfWeek <= 5) {
            const cellId = `d${dayOfWeek}h${currentHour}`;
            const currentCell = document.getElementById(cellId);
            if (currentCell) {
                currentCell.classList.add("current-cell");
            }
        }
    }
}

// Run updateTime every 10 seconds
updateTime();
setInterval(updateTime, 10000);

// Subject highlighting feature
const subjects = document.querySelectorAll(".subject");
subjects.forEach((subject) => {
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

// Theme toggle
function changeTheme() {
    isDarkTheme = !isDarkTheme;

    if (isDarkTheme) {
        document.body.setAttribute("data-theme", "dark");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem("theme", "dark"); // Save theme to localStorage
    } else {
        document.body.removeAttribute("data-theme");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem("theme", "light"); // Save theme to localStorage
    }
}

// Apply saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    isDarkTheme = true;
} else {
    document.body.removeAttribute("data-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
    isDarkTheme = false;
}

// Weather API
function getWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeatherData, handleLocationError);
    } else {
        weatherDisplay.innerHTML = "Geolocația nu este disponibilă în browser.";
    }
}

function fetchWeatherData(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.current_weather.temperature;
            const weatherCode = data.current_weather.weathercode;
            const weatherEmoji = getWeatherEmoji(weatherCode);
            const sunrise = formatTime(data.daily.sunrise[0]);
            const sunset = formatTime(data.daily.sunset[0]);

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
        .catch((error) => {
            weatherDisplay.innerHTML = "Nu s-au putut încărca datele meteo.";
        });
}

function handleLocationError() {
    weatherDisplay.innerHTML = "";
}

function formatTime(isoString) {
    return isoString.split("T")[1].slice(0, 5);
}

function getWeatherEmoji(code) {
    const weatherCodes = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "❄️🌫️",
        51: "🌧️",
        53: "🌧️",
        55: "🌧️",
        61: "🌦️",
        63: "🌧️",
        65: "🌧️🌧️",
        71: "🌨️",
        73: "🌨️",
        75: "❄️❄️",
        95: "⛈️",
        96: "⛈️🌨️",
    };
    return weatherCodes[code] || "🤷‍♂️";
}

// Initialize weather and update every 5 minutes
getWeather();
setInterval(getWeather, 300000);

// Color picker

const colorPicker = document.getElementById("accentColorPicker");

colorPicker.addEventListener("input", (event) => {
    const newColor = event.target.value;
    document.documentElement.style.setProperty("--accent-color", newColor);
});
colorPicker.addEventListener("change", (event) => {
    const newColor = event.target.value;
    localStorage.setItem("accentColor", newColor);
});
const savedColor = localStorage.getItem("accentColor");
if (savedColor) {
    document.documentElement.style.setProperty("--accent-color", savedColor);
    colorPicker.value = savedColor;
}
