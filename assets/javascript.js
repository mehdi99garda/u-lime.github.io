const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
nextBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
});
submitBtn.addEventListener("click", function () {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    k = parseFloat(document.querySelector("#k").value);
    ca = parseFloat(document.querySelector("#ca").value);
    mg2 = parseFloat(document.querySelector("#mg2").value);
    al = parseFloat(document.querySelector("#al").value);
    y = parseFloat(document.querySelector("#y").value);
    dpth = parseFloat(document.querySelector("#dpth").value);
    hal = parseFloat(document.querySelector("#hal").value);
    rpm = parseFloat(document.querySelector("#rpm").value);
    surface = parseFloat(document.querySelector("#surface").value);
    ve = parseFloat(document.querySelector("#ve").value);
    x = parseFloat(document.querySelector("#x").value);

    Calculate(k, ca, mg2, al, y, dpth, hal, rpm, surface, ve, x);
    result.style.display = "block";
    lq1_txt.innerHTML += LQ1;
    lq2_txt.innerHTML += LQ2;
    /*setTimeout(function () {
        alert("LQ1 : " + LQ1 + "\nLQ2 : " + LQ2);
        location.reload();
    }, 800);*/
    modal.style.display = "block";
});

prevBtnSec.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnThird.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});
prevBtnFourth.addEventListener("click", function (event) {
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
});


var LQ1;
var LQ2;
function Calculate(k, ca, mg2, al, y, dpth, hal, rpm, surface, ve, x) {
    var a = k / 39.1 / 10;
    var sb = a + ca + mg2;

    var t = sb + al;
    var m = 100 * (al / t);

    var T_ = sb + hal;
    var va = 100 * (sb / T_);

    var LR1 = y * al + (x - (ca + mg2));

    var LR2 = ((ve - va) * T_) / 100;

    LQ1 = (LR1 / rpm) * (surface / 100) * (dpth / 20) * 100;

    LQ2 = (LR2 / rpm) * (surface / 100) * (dpth / 20) * 100;
}
var k, ca, mg2, al, y, dpt, hal, rpm, sur, ve, x;
var lq1_txt = document.getElementById("LQ1");
var lq2_txt = document.getElementById("LQ2");

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  window.location.reload();
}

