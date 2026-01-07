const container = document.querySelector(".container");
const main = document.querySelector(".main");
const gals = document.querySelectorAll(".gals");

container.addEventListener("click", (e) => {
  if (e.target.className === "gals") {
    main.src = e.target.src;
    main.classList.add("fade-in");
    setTimeout(() => {
      main.classList.remove("fade-in");
    }, 500);

    e.target.classList.add("active");
  }
});
