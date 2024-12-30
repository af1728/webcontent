const hours = document.querySelector(".time_hours");
const minutes = document.querySelector(".time_minutes");
const seconds = document.querySelector(".time_seconds");

const centre_number = document.querySelector(".centre_number");
const subject_title = document.querySelector(".subject_title");
const paper_number = document.querySelector(".paper_number");
const starting_time = document.querySelector(".starting_time");
const finishing_time = document.querySelector(".finishing_time");
const date = document.querySelector(".date");

const centre_number_field = document.querySelector(".centre_number_field");
const subject_title_field = document.querySelector(".subject_title_field");
const paper_number_field = document.querySelector(".paper_number_field");
const starting_time_field = document.querySelector(".starting_time_field");
const finishing_time_field = document.querySelector(".finishing_time_field");
const start_button = document.querySelector(".start_button");

function updateDate() {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();

    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    date.textContent = `${d} ${months[m]} ${y}`;
}

function updateTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    hours.textContent = `${h}`;
    minutes.textContent = `:${m}`;
    seconds.textContent = `:${s}`;
}

updateTime();
setInterval(updateTime, 100);

function updateInfo() {
    centre_number.textContent = centre_number_field.value;
    subject_title.textContent = subject_title_field.value;
    paper_number.textContent = paper_number_field.value;
    if (starting_time_field.value !== "") {
        starting_time.textContent = `Starting time: ${starting_time_field.value}`;
    } else {
        starting_time.textContent = "";
    }
    if (finishing_time_field.value !== "") {
        finishing_time.textContent = `Finishing time: ${finishing_time_field.value}`;
    } else {
        finishing_time.textContent = "";
    }
    updateDate();
}

start_button.addEventListener("click", updateInfo);