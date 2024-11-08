
const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthNameEl.innerText = date.toLocaleString("en", {
  month: "long",
});

dayNameEl.innerText = date.toLocaleString("en", {
  weekday: "long",
});

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();



//The toLocaleString() method returns a Date object as a string, using locale settings.
//Date.toLocaleString(locales, options)
//locales : Optional. Which language specific format to use.
//options : Optional. An object where you can set some properties.