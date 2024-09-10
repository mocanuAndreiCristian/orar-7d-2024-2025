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

const dayOfTheWeek = document.getElementById("dayOfTheWeek");
const hourOfTheDay = document.getElementById("hourOfTheDay");

const date = new Date();

//decide the day

const weekday = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

let dayCode = date.getDay();
let day = weekday[dayCode];

dayOfTheWeek.textContent = day;

if (dayCode == 0 || dayCode == 6) {
    dayOfTheWeek.style.color = "#ff0000";
} else if (dayCode >= 1 && dayCode <= 5) {
    dayOfTheWeek.style.color = "#1d85ee";
}
switch (dayCode) {
    case 1:
        monday.style.backgroundColor = "#499ff6";
        break;

    case 2:
        tuesday.style.backgroundColor = "#499ff6";
        break;

    case 3:
        wednesday.style.backgroundColor = "#499ff6";
        break;

    case 4:
        thursday.style.backgroundColor = "#499ff6";
        break;

    case 5:
        friday.style.backgroundColor = "#499ff6";
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
        hourOfTheDay.style.color = "#ff0000";
    } else if (hourCode >= 12 && hourCode <= 18) {
        hourOfTheDay.style.color = "#1d85ee";
    }
    switch (hourCode) {
        case 12:
            h12.style.backgroundColor = "#499ff6";
            break;
        case 13:
            h13.style.backgroundColor = "#499ff6";
            break;
        case 14:
            h14.style.backgroundColor = "#499ff6";
            break;
        case 15:
            h15.style.backgroundColor = "#499ff6";
            break;
        case 16:
            h16.style.backgroundColor = "#499ff6";
            break;
        case 17:
            h17.style.backgroundColor = "#499ff6";
            break;
        case 18:
            h18.style.backgroundColor = "#499ff6";
            break;
    }
}

updateTime();
setInterval(updateTime, 5000);
