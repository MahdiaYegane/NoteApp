let $ = document;
let p1 = $.getElementById("p1");
let p2 = $.getElementById("p2");
let p3 = $.getElementById("p3");
let p4 = $.getElementById("p4");
let p5 = $.getElementById("p5");
let p6 = $.getElementById("p6");
let showData = $.querySelector(".showData");
let input = $.querySelector(".input");
let btnAdd = $.querySelector(".add");
let btnRemove = $.querySelector(".remove");
let clickOnNote = $.querySelector(".clickOnNote");
let imgSun = document.querySelector(".imgsun");
let body = $.querySelector("body");
let menu = $.querySelector(".menu");

let done = false;
imgSun.addEventListener("click", function () {
  if (done == true) {
    imgSun.setAttribute("src", "images/moon-sat.svg");
    body.style.backgroundColor = "white";
    menu.style.color = "#000";
    done = false;
  } else {
    imgSun.setAttribute("src", "images/sun.svg");
    body.style.backgroundColor = "black";
    menu.style.color = "#fff";

    done = true;
  }
});

let dataDiv;
p1.addEventListener("click", function () {
  input.style.backgroundColor = "#def9b8";
});

p2.addEventListener("click", function () {
  input.style.backgroundColor = "#ff9d9d";
});

p3.addEventListener("click", function () {
  input.style.backgroundColor = "#a9d7f4";
});

p4.addEventListener("click", function () {
  input.style.backgroundColor = "#f2f1ba";
});

p5.addEventListener("click", function () {
  input.style.backgroundColor = "#c0c0c0";
});

p6.addEventListener("click", function () {
  input.style.backgroundColor = "#bab8ed";
});

btnRemove.addEventListener("click", function () {
  input.value = "";
});

btnAdd.addEventListener("click", function () {
  dataDiv = $.createElement("div");
  dataDiv.style.backgroundColor = input.style.backgroundColor;
  if (input.style.backgroundColor == "") {
    dataDiv.style.backgroundColor = "#baf0ed";
  }
  dataDiv.style.marginTop = "0.3rem";
  dataDiv.style.marginLeft = "0.3rem";
  dataDiv.style.display = "inline-block";
  dataDiv.style.padding = "1rem";
  dataDiv.style.borderRadius = "0.3rem";
  dataDiv.innerHTML = input.value;
  if (input.value != "") {
    showData.append(dataDiv);
  }

  input.value = "";
  showData.addEventListener("click", function (e) {
    if (e.target.tagName == "DIV") {
      e.target.remove();
    }
  });
});
