let dateContainer = document.querySelector(".date-container");
let clockContainer = document.querySelector(".clock-container");
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateClock = setInterval(function dateTime() {
  const today = new Date();
  let date = today.getDate();
  let day = weekdays[today.getDay()];
  let month = monthNames[today.getMonth()];

  let hours = today.getHours();
  let minutes = today.getMinutes();

  minutes = minutes < 10 ? "0" + minutes : minutes;

  dateContainer.innerHTML = `<p>${day}</p><p><span>${date}</span></p><p>${month}</p>`;
  clockContainer.innerHTML = `${hours}:${minutes}`;
}, 1000);