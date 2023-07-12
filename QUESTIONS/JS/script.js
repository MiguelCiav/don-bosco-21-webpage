var firstTime;
var younger;
var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var button4 = document.getElementById("button-4");

function setFirstTime(setValue) {
  firstTime = setValue;

  if (firstTime) {
    button1.setAttribute("style", "background-color: #DFEF87");
    button2.setAttribute("style", "background-color: #FBF090");
  } else {
    button2.setAttribute("style", "background-color: #DFEF87");
    button1.setAttribute("style", "background-color: #FBF090");
  }
}

function isYounger(setValue) {
  younger = setValue;

  if (younger) {
    button3.setAttribute("style", "background-color: #DFEF87");
    button4.setAttribute("style", "background-color: #FBF090");
  } else {
    button4.setAttribute("style", "background-color: #DFEF87");
    button3.setAttribute("style", "background-color: #FBF090");
  }

  setTimeout(redirect, 500);
}

function redirect() {
  if (firstTime == true && younger == true) {
    location.href = "../../NEW_YOUNGER_FORM/HTML/new_younger_form.html";
  }
  if (firstTime == false && younger == true) {
    location.href = "../../YOUNGER_FORM/HTML/younger_form.html";
  }
  if (firstTime == true && younger == false) {
    location.href = "../../NEW_ADULT_FORM/HTML/new_adult_form.html";
  }
  if (firstTime == false && younger == false) {
    location.href = "../../ADULT_FORM/HTML/adult_form.html";
  }
}
