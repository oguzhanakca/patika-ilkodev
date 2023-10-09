let myName = document.getElementById("myName");
let time = document.getElementById("myClock");

window.addEventListener("load", (e) => {
  let name = prompt("Adınız");
  myName.textContent = name;
  showTime();
});

function showTime() {
  let date = new Date();
  let day = date.getDay();
  switch (day) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";

      break;
    case 2:
      day = "Salı";

      break;
    case 3:
      day = "Çarşamba";

      break;
    case 4:
      day = "Perşembe";

      break;
    case 5:
      day = "Cuma";

      break;

    default:
      day = "Cumartesi";

      break;
  }
  time.innerText = date.toLocaleTimeString().slice(0, 7) + " " + day;
  setInterval(showTime, 1000);
}
