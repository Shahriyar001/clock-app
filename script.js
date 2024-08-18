let hr = documnet.getElementById("hour");
let min = documnet.getElementById("min");
let sec = documnet.getElementById("sec");

function displayTime() {
  let date = new Date();

  // geting hour, mins. sec
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotution = 6 * min;
}

setInterval(displayTime, 1000);
