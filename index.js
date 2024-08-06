let allList = document.querySelectorAll("ul li");
let result = document.querySelector(".result");

if (window.localStorage.color) {
  result.style.backgroundColor = window.localStorage.color;
  allList.forEach(function (li) {
      console.log(li.getAttribute(`data-color`));
      if (li.getAttribute(`data-color`) === window.localStorage.color) {
      result.textContent = `${window.localStorage.color}`;
    }
  });
  if (window.localStorage.color !== "white") {
    result.style.color = "#fff";
  } else {
    result.style.color = "#000";
  }

  allList.forEach(function (li) {
    li.classList.remove("active");
  });

  document
    .querySelector(`[data-color=${window.localStorage.color}]`)
    .classList.add("active");
}

allList.forEach(function (li) {
  li.addEventListener("click", function (e) {
    allList.forEach(function (li) {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
    window.localStorage.setItem("color", e.target.dataset.color);
    result.style.backgroundColor = window.localStorage["color"];
    result.textContent = `${e.target.dataset.color}`;
    if (e.target.dataset.color !== "white") {
      result.style.color = "#fff";
    } else {
      result.style.color = "#000";
    }
  });
});


