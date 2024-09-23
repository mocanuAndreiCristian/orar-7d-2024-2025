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

    if (dayCode == 1 && hourCode == 12) {
        d1h12.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 12) {
        d2h12.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 12) {
        d3h12.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 12) {
        d4h12.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 12) {
        d5h12.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 13) {
        d1h12.style.backgroundColor = "#ffffff";
        d1h13.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 13) {
        d2h12.style.backgroundColor = "#ffffff";
        d2h13.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 13) {
        d3h12.style.backgroundColor = "#ffffff";
        d3h13.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 13) {
        d4h12.style.backgroundColor = "#ffffff";
        d4h13.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 13) {
        d5h12.style.backgroundColor = "#ffffff";
        d5h13.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 14) {
        d1h13.style.backgroundColor = "#ffffff";
        d1h14.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 14) {
        d2h13.style.backgroundColor = "#ffffff";
        d2h14.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 14) {
        d3h13.style.backgroundColor = "#ffffff";
        d3h14.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 14) {
        d4h13.style.backgroundColor = "#ffffff";
        d4h14.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 14) {
        d5h13.style.backgroundColor = "#ffffff";
        d5h14.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 15) {
        d1h14.style.backgroundColor = "#ffffff";
        d1h15.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 15) {
        d2h14.style.backgroundColor = "#ffffff";
        d2h15.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 15) {
        d3h14.style.backgroundColor = "#ffffff";
        d3h15.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 15) {
        d4h14.style.backgroundColor = "#ffffff";
        d4h15.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 15) {
        d5h14.style.backgroundColor = "#ffffff";
        d5h15.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 16) {
        d1h15.style.backgroundColor = "#ffffff";
        d1h16.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 16) {
        d2h15.style.backgroundColor = "#ffffff";
        d2h16.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 16) {
        d3h15.style.backgroundColor = "#ffffff";
        d3h16.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 16) {
        d4h15.style.backgroundColor = "#ffffff";
        d4h16.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 16) {
        d5h15.style.backgroundColor = "#ffffff";
        d5h16.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 17) {
        d1h16.style.backgroundColor = "#ffffff";
        d1h17.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 17) {
        d2h16.style.backgroundColor = "#ffffff";
        d2h17.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 17) {
        d3h16.style.backgroundColor = "#ffffff";
        d3h17.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 17) {
        d4h16.style.backgroundColor = "#ffffff";
        d4h17.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 17) {
        d5h16.style.backgroundColor = "#ffffff";
        d5h17.style.backgroundColor = "#499ff6";
    } else if (dayCode == 1 && hourCode == 18) {
        d1h17.style.backgroundColor = "#ffffff";
        d1h18.style.backgroundColor = "#499ff6";
    } else if (dayCode == 2 && hourCode == 18) {
        d2h17.style.backgroundColor = "#ffffff";
        d2h18.style.backgroundColor = "#499ff6";
    } else if (dayCode == 3 && hourCode == 18) {
        d3h17.style.backgroundColor = "#ffffff";
        d3h18.style.backgroundColor = "#499ff6";
    } else if (dayCode == 4 && hourCode == 18) {
        d4h17.style.backgroundColor = "#ffffff";
        d4h18.style.backgroundColor = "#499ff6";
    } else if (dayCode == 5 && hourCode == 18) {
        d5h17.style.backgroundColor = "#ffffff";
        d5h18.style.backgroundColor = "#499ff6";
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
