
const from = document.getElementById("form");
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus");
const btnPlyus = document.getElementById("plyus");
const soz = document.getElementById("text");

let count = 0;

from.addEventListener("submit", function (refreshBolma) {
    refreshBolma.preventDefault();

    const inputningQiymati = Number(input.value);

    console.log(typeof inputningQiymati);

    soz.textContent = inputningQiymati;
    count = inputningQiymati;
    input.value = "";

});

btnPlyus.addEventListener("click", function () {
    count++;
    console.log(count);
    soz.textContent = count;
});

btnMinus.addEventListener("click", function () {
    count--;
    console.log(count);
    soz.textContent = count;
});

const inputValue = Number(input.value);
