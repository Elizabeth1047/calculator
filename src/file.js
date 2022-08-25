const container = document.getElementById("container");
const switches = document.getElementById("switches");
const numbers = document.getElementById("numbers");
const padd = Array.from(document.getElementsByClassName("padd"));
const input = document.getElementById("input");

switches.addEventListener("click", (e) => {
  switches.classList.toggle("switches2");
  container.classList.toggle("container2");
  numbers.classList.toggle("numbers2");
  input.classList.toggle("input2");
  padd.map((pad) => {
    pad.classList.toggle("padd2");
  });
});

padd.forEach((pad) => {
  pad.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        input.innerText = "";
        break;
      case "=":
        try {
          input.innerText = eval(input.innerText);
        } catch {
          input.innerText = "Error";
        }

        break;
      default:
        if (input.innerText.length < 8) {
          input.innerText += pad.innerText;
        }
    }
  });
});
