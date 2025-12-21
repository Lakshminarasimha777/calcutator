
let display = "";

function appendValue(value) {
  display = display + value;
  document.getElementById("display").value = display;
}

function clearDisplay() {
  display = "";
  document.getElementById("display").value = display;
}

function calculate() {
  display = eval(display);
  document.getElementById("display").value = display;
}


function removeLast() {
  display = display.slice(0, -1);
  document.getElementById("display").value = display;
}

