let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

let allInputs = document.querySelectorAll("input");
console.log(allInputs);

allInputs.forEach(addEventListenerFunc);

function addEventListenerFunc(e) {
  e.addEventListener("keydown", inputFunc);
}

function inputFunc(e) {
  let pattern = /^[0-9]*$/g;
  const max = +e.srcElement.getAttribute("max");

  let typed = +e.key;

  if (pattern.test(e.key) == true) {
    if (!isNaN(typed)) {
      e.preventDefault();
    }
    /* 
      if (+(e.target.value + typed) <= max) { }*/

    e.srcElement.value = typed;
    if (e.srcElement.nextElementSibling != null) {
      e.srcElement.nextElementSibling.focus();
    }
  }

  if (e.key == "Backspace" && e.srcElement.value.length == 1) {
    e.srcElement.value = "";
    e.preventDefault();
    console.log("this could be ugee");
    if (e.srcElement.previousElementSibling != null) {
      e.srcElement.previousElementSibling.focus();
    }
  }

  if (e.key == "Backspace" && e.srcElement.value.length == 0) {
    /* console.log(e.srcElement); */
    if (e.srcElement.previousElementSibling != null) {
      e.preventDefault();
      e.srcElement.previousElementSibling.focus();

      let value = e.srcElement.previousElementSibling.value;
      e.srcElement.previousElementSibling.value = value;
    }
  }

  // e.srcElement.value = e.srcElement.value.slice(0, e.srcElement.maxLength);
  /* 
    e.srcElement.nextElementSibling.focus();

    if (e.key == "Backspace" && e.srcElement.value.length == 0) {
      if (e.srcElement.previousElementSibling != null) {
        e.srcElement.previousElementSibling.focus();
      }
    }
  } else {
    e.srcElement.value = ""; */
}
