const white = "#ffffff";
const blue = "#2994ff";
const red = "#ff4949";

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

const dayOfTheWeek = document.getElementById("dayOfTheWeek");
const hourOfTheDay = document.getElementById("hourOfTheDay");

const subject = document.getElementsByClassName("subject");

const date = new Date();

//decide the day

const weekday = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

let dayCode = date.getDay();

switch (dayCode) {
    case 1:
        monday.style.backgroundColor = blue;
        break;

    case 2:
        monday.style.backgroundColor = white;
        tuesday.style.backgroundColor = blue;
        break;

    case 3:
        tuesday.style.backgroundColor = white;
        wednesday.style.backgroundColor = blue;
        break;

    case 4:
        wednesday.style.backgroundColor = white;
        thursday.style.backgroundColor = blue;
        break;

    case 5:
        thursday.style.backgroundColor = white;
        friday.style.backgroundColor = blue;
        break;
    case 6:
        friday.style.backgroundColor = white;
        break;
}

//decide the time

function updateTime() {
    const date = new Date();

    let hourCode = date.getHours();
    let minuteCode = date.getMinutes();

    minuteCode = minuteCode < 10 ? "0" + minuteCode : minuteCode;

    hourOfTheDay.textContent = `${hourCode}:${minuteCode}`;

    if (hourCode < 12 || hourCode > 18) {
        hourOfTheDay.style.color = red;
    } else if (hourCode >= 12 && hourCode <= 18) {
        hourOfTheDay.style.color = blue;
    }
    switch (hourCode) {
        case 12:
            h12.style.backgroundColor = blue;
            break;
        case 13:
            h12.style.backgroundColor = white;
            h13.style.backgroundColor = blue;
            break;
        case 14:
            h13.style.backgroundColor = white;
            h14.style.backgroundColor = blue;
            break;
        case 15:
            h14.style.backgroundColor = white;
            h15.style.backgroundColor = blue;
            break;
        case 16:
            h15.style.backgroundColor = white;
            h16.style.backgroundColor = blue;
            break;
        case 17:
            h16.style.backgroundColor = white;
            h17.style.backgroundColor = blue;
            break;
        case 18:
            h17.style.backgroundColor = white;
            h18.style.backgroundColor = blue;
            break;
        case 19:
            h18.style.backgroundColor = white;
            break;
    }

    if (dayCode == 1 && hourCode == 12) {
        d1h12.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 12) {
        d2h12.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 12) {
        d3h12.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 12) {
        d4h12.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 12) {
        d5h12.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 13) {
        d1h12.style.backgroundColor = white;
        d1h13.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 13) {
        d2h12.style.backgroundColor = white;
        d2h13.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 13) {
        d3h12.style.backgroundColor = white;
        d3h13.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 13) {
        d4h12.style.backgroundColor = white;
        d4h13.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 13) {
        d5h12.style.backgroundColor = white;
        d5h13.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 14) {
        d1h13.style.backgroundColor = white;
        d1h14.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 14) {
        d2h13.style.backgroundColor = white;
        d2h14.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 14) {
        d3h13.style.backgroundColor = white;
        d3h14.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 14) {
        d4h13.style.backgroundColor = white;
        d4h14.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 14) {
        d5h13.style.backgroundColor = white;
        d5h14.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 15) {
        d1h14.style.backgroundColor = white;
        d1h15.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 15) {
        d2h14.style.backgroundColor = white;
        d2h15.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 15) {
        d3h14.style.backgroundColor = white;
        d3h15.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 15) {
        d4h14.style.backgroundColor = white;
        d4h15.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 15) {
        d5h14.style.backgroundColor = white;
        d5h15.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 16) {
        d1h15.style.backgroundColor = white;
        d1h16.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 16) {
        d2h15.style.backgroundColor = white;
        d2h16.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 16) {
        d3h15.style.backgroundColor = white;
        d3h16.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 16) {
        d4h15.style.backgroundColor = white;
        d4h16.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 16) {
        d5h15.style.backgroundColor = white;
        d5h16.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 17) {
        d1h16.style.backgroundColor = white;
        d1h17.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 17) {
        d2h16.style.backgroundColor = white;
        d2h17.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 17) {
        d3h16.style.backgroundColor = white;
        d3h17.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 17) {
        d4h16.style.backgroundColor = white;
        d4h17.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 17) {
        d5h16.style.backgroundColor = white;
        d5h17.style.backgroundColor = blue;
    } else if (dayCode == 1 && hourCode == 18) {
        d1h17.style.backgroundColor = white;
        d1h18.style.backgroundColor = blue;
    } else if (dayCode == 2 && hourCode == 18) {
        d2h17.style.backgroundColor = white;
        d2h18.style.backgroundColor = blue;
    } else if (dayCode == 3 && hourCode == 18) {
        d3h17.style.backgroundColor = white;
        d3h18.style.backgroundColor = blue;
    } else if (dayCode == 4 && hourCode == 18) {
        d4h17.style.backgroundColor = white;
        d4h18.style.backgroundColor = blue;
    } else if (dayCode == 5 && hourCode == 18) {
        d5h17.style.backgroundColor = white;
        d5h18.style.backgroundColor = blue;
    }
}

updateTime();
setInterval(updateTime, 10000);

//highlight subjects

Array.from(subject).forEach(function (subject) {
    subject.addEventListener("click", function () {
        markSubject(subject);
    });
});

function markSubject(el) {
    let marked = el.getAttribute("data-marked") === "true";
    if (!marked) {
        el.innerHTML = "<mark>" + el.innerHTML + "</mark>";
        el.setAttribute("data-marked", "true");
    } else {
        el.innerHTML = el.innerHTML.replace("<mark>", "").replace("</mark>", "");
        el.setAttribute("data-marked", "false");
    }
}

//decide color theme

const switchTheme = document.getElementById("switchTheme");
let currentTheme = 0;

function changeTheme() {
    if (currentTheme == 0) {
        document.documentElement.style.setProperty("color-scheme", "dark");
        currentTheme = 1;
    } else if (currentTheme == 1) {
        document.documentElement.style.setProperty("color-scheme", "light");
        currentTheme = 0;
    }
}

// The weather part...

// Coordinates for Bucharest
const latitude = 44.4328;
const longitude = 26.1043;

// The URL to fetch weather data
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    console.log("Geolocația nu este suportată de browser.");
}

function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=sunrise,sunset&timezone=auto`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.current_weather.temperature;
            const weatherCode = data.current_weather.weathercode;
            const sunrise = formatTime(data.daily.sunrise[0]);
            const sunset = formatTime(data.daily.sunset[0]);
            const weatherDescription = getWeatherDescription(weatherCode);

            document.getElementById(
                "weather"
            ).innerHTML = `${temperature}°C&nbsp;&nbsp;&nbsp;${weatherDescription}<br>
                Răsărit&nbsp;&nbsp;&nbsp;${sunrise}<br>
                Apus&nbsp;&nbsp;&nbsp;${sunset}`;
        })
        .catch((error) => {
            console.error("Eroare:", error);
        });
}

function error() {
    document.getElementById("weather").innerText = "";
}

function formatTime(isoString) {
    return isoString.split("T")[1].slice(0, 5);
}

// Function to interpret Open-Meteo weather codes
function getWeatherDescription(code) {
    const weatherCodes = {
        0: "Cer senin ☀️",
        1: "Mai mult senin 🌤️",
        2: "Parțial noros ⛅",
        3: "Noros ☁️",
        45: "Ceață 🌫️",
        48: "Ceață cu chiciură ❄️🌫️",
        51: "Burniță ușoară 🌧️",
        53: "Burniță moderată 🌧️",
        55: "Burniță densă 🌧️",
        61: "Ploaie ușoară 🌦️",
        63: "Ploaie moderată 🌧️",
        65: "Ploaie abundentă 🌧️🌧️",
        71: "Ninsoare ușoară 🌨️",
        73: "Ninsoare moderată 🌨️",
        75: "Ninsoare abundentă ❄️❄️",
        95: "Furtună ⛈️",
        96: "Furtună cu grindină ⛈️🌨️",
    };
    return weatherCodes[code] || "Ceruri misterioase 🤷‍♂️";
}

setInterval(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}, 300000);
