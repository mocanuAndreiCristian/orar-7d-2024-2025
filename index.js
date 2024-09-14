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

const subject = document.getElementsByClassName("subject");

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
        monday.style.backgroundColor = "#ffffff";
        tuesday.style.backgroundColor = "#499ff6";
        break;

    case 3:
        tuesday.style.backgroundColor = "#ffffff";
        wednesday.style.backgroundColor = "#499ff6";
        break;

    case 4:
        wednesday.style.backgroundColor = "#ffffff";
        thursday.style.backgroundColor = "#499ff6";
        break;

    case 5:
        thursday.style.backgroundColor = "#ffffff";
        friday.style.backgroundColor = "#499ff6";
        break;
    case 6:
        friday.style.backgroundColor = "#ffffff";
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
            h18.style.backgroundColor = "#ffffff";
            h12.style.backgroundColor = "#499ff6";
            break;
        case 13:
            h12.style.backgroundColor = "#ffffff";
            h13.style.backgroundColor = "#499ff6";
            break;
        case 14:
            h13.style.backgroundColor = "#ffffff";
            h14.style.backgroundColor = "#499ff6";
            break;
        case 15:
            h14.style.backgroundColor = "#ffffff";
            h15.style.backgroundColor = "#499ff6";
            break;
        case 16:
            h15.style.backgroundColor = "#ffffff";
            h16.style.backgroundColor = "#499ff6";
            break;
        case 17:
            h16.style.backgroundColor = "#ffffff";
            h17.style.backgroundColor = "#499ff6";
            break;
        case 18:
            h17.style.backgroundColor = "#ffffff";
            h18.style.backgroundColor = "#499ff6";
            break;
        case 19:
            h18.style.backgroundColor = "#ffffff";
            break;
    }
}

updateTime();
setInterval(updateTime, 5000);

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
