const monday = document.getElementById("Monday");
const tuesday = document.getElementById("Tuesday");
const wednesday = document.getElementById("Wednesday");
const thursday = document.getElementById("Thursday");
const friday = document.getElementById("Friday");

const dayOfTheWeek = document.getElementById("dayOfTheWeek");

const weekday = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

const d = new Date();
let dayCode = d.getDay();
let day = weekday[dayCode];

//decide the day

dayOfTheWeek.textContent = day;

if (dayCode == 0 || dayCode == 6) {
    dayOfTheWeek.style.color = "#ff0000";
} else if (dayCode >= 1 && dayCode <= 5) {
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
    dayOfTheWeek.style.color = "#1d85ee";
}
