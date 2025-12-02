let a = 0;
let b = 0;
let count1El = document.getElementById('count1-el');
let count2El = document.getElementById('count2-el');
count1El.textContent = a;
count2El.textContent = b;

function sec1Btn1(){
    a += 1
    count1El.textContent = a;
}
function sec1Btn2(){
    a += 2
    count1El.textContent = a;
}
function sec1Btn3(){
    a += 3
    count1El.textContent = a;
}

function sec2Btn1(){
    b += 1
    count2El.textContent = b;
}
function sec2Btn2(){
    b += 2
    count2El.textContent = b;
}
function sec2Btn3(){
    b += 3
    count2El.textContent = b;
}

