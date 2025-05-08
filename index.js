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
        document.getElementById("weather-desc").textContent = "Geolocația nu e disponibilă.";
    }
}

function fetchWeatherData(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Removed moon_phase from the API URL
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=sunrise,sunset&hourly=apparent_temperature,relative_humidity_2m&timezone=auto`;

    fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error(`API error: ${res.status} ${res.statusText}`);
            }
            return res.json();
        })
        .then((data) => {
            const weather = data.current_weather;
            const temp = `${weather.temperature}°C`;

            const sunrise = formatTime(data.daily.sunrise[0]);
            const sunset = formatTime(data.daily.sunset[0]);

            const now = new Date();
            const sunriseTime = new Date(data.daily.sunrise[0]);
            const sunsetTime = new Date(data.daily.sunset[0]);
            const isNight = now < sunriseTime || now > sunsetTime;

            // Use a default moon emoji for nighttime
            const emoji = isNight
                ? "🌙" // Default moon icon for nighttime
                : getWeatherEmoji(weather.weathercode);

            // Inject into DOM
            document.getElementById("weather-emoji").textContent = emoji;
            document.getElementById("weather-temp").textContent = temp;
            document.getElementById("weather-desc").textContent = getWeatherDescription(
                weather.weathercode
            );
            document.getElementById("weather-location").textContent = "📍 Voluntari, RO";
            document.getElementById("sunrise").textContent = sunrise;
            document.getElementById("sunset").textContent = sunset;

            const currentHourIndex = new Date().getHours();
            const feelsLike = data.hourly.apparent_temperature[currentHourIndex];
            const humidity = data.hourly.relative_humidity_2m[currentHourIndex];
            const wind = data.current_weather.windspeed;

            document.getElementById("feels-like").textContent = `Feels like: ${feelsLike}°C`;
            document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
            document.getElementById("wind-speed").textContent = `Wind: ${wind} m/s`;
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weather-desc").textContent = "Failed to fetch weather data.";
        });
}

function getMoonEmoji(phase) {
    if (phase < 0.03 || phase > 0.97) return "🌑"; // New Moon
    if (phase < 0.22) return "🌒"; // Waxing Crescent
    if (phase < 0.28) return "🌓"; // First Quarter
    if (phase < 0.47) return "🌔"; // Waxing Gibbous
    if (phase < 0.53) return "🌕"; // Full Moon
    if (phase < 0.72) return "🌖"; // Waning Gibbous
    if (phase < 0.78) return "🌗"; // Last Quarter
    return "🌘"; // Waning Crescent
}

function handleLocationError() {
    document.getElementById("weather-desc").textContent = "Eroare la detectarea locației.";
}

function formatTime(iso) {
    return iso.split("T")[1].slice(0, 5);
}

function getWeatherEmoji(code) {
    const codes = {
        0: "☀️",
        1: "🌤️",
        2: "⛅",
        3: "☁️",
        45: "🌫️",
        48: "🌫️❄️",
        51: "🌦️",
        53: "🌧️",
        55: "🌧️",
        61: "🌧️",
        63: "🌧️",
        65: "🌧️🌧️",
        71: "🌨️",
        73: "🌨️",
        75: "❄️❄️",
        80: "🌦️",
        81: "🌧️",
        82: "🌧️🌧️",
        95: "⛈️",
        96: "⛈️🌨️",
        99: "⛈️❄️",
    };
    return codes[code] || "🤷‍♂️";
}

function getWeatherDescription(code) {
    const descriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Dense drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Light snow",
        73: "Moderate snow",
        75: "Heavy snow",
        80: "Rain showers",
        81: "Moderate showers",
        82: "Violent showers",
        95: "Thunderstorm",
        96: "Thunderstorm with hail",
        99: "Severe thunderstorm",
    };
    return descriptions[code] || "Unknown";
}

// Run at start + update every 5 mins
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

// To do list

document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.querySelector(".todo-list"); // Ensure this targets the correct <ul>
    const addTaskInput = document.querySelector(".add-task input[type='text']");
    const addTaskButton = document.querySelector(".add-task button");

    // Add event listener for the "Add" button
    addTaskButton.addEventListener("click", () => {
        const taskText = addTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            addTaskInput.value = ""; // Clear the input field after adding the task
        }
    });

    // Add event listener for the "Enter" key in the input field
    addTaskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            const taskText = addTaskInput.value.trim();
            if (taskText) {
                addTask(taskText);
                addTaskInput.value = ""; // Clear the input field after adding the task
            }
        }
    });

    taskList.addEventListener("click", (e) => {
        const target = e.target;

        // Check if the clicked element is the delete button or its child (icon)
        if (target.classList.contains("delete-btn") || target.closest(".delete-btn")) {
            const li = target.closest("li"); // Find the closest <li> element
            if (li) {
                li.remove(); // Remove the task from the DOM
                saveTasks(); // Save the updated task list to localStorage
            }
        }

        // Save tasks when a checkbox is toggled
        if (target.type === "checkbox") {
            saveTasks();
        }
    });

    function addTask(text, checked = false) {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
        <input type="checkbox" ${checked ? "checked" : ""}>
        <label>${text}</label>
        <button class="delete-btn" title="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
      `;
        taskList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll(".todo-item").forEach((item) => {
            const label = item.querySelector("label").textContent;
            const checked = item.querySelector('input[type="checkbox"]').checked;
            tasks.push({ text: label, checked });
        });
        localStorage.setItem("todo-tasks", JSON.stringify(tasks));
    }

    function loadTasks() {
        const data = JSON.parse(localStorage.getItem("todo-tasks")) || [];
        data.forEach((task) => addTask(task.text, task.checked));
    }

    loadTasks();
});
