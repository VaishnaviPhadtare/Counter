// set inital value to zero
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
      document.body.classList.remove("bodycol1");
      document.body.classList.remove("bodycol3");
      document.body.classList.add("bodycol1");
    }
    if (count < 0) {
      value.style.color = "red";
      document.body.classList.remove("bodycol1");
      document.body.classList.remove("bodycol3");
      document.body.classList.add("bodycol2");
    }
    if (count === 0) {
      value.style.color = "#222";
      document.body.classList.remove("bodycol1");
      document.body.classList.remove("bodycol2");
      document.body.classList.add("bodycol3");
    }
    value.textContent = count;
  });
});
