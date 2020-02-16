'use strict';

const   mainWrapper = document.getElementById('main-wrapper'),
        circlesCount = Math.floor(Math.random() * (100)),
        circles = [];

console.log(`Generated ${circlesCount} circles`);

for (let i = 0; i < circlesCount; i++) {
    let circleWrapper = document.createElement('div');
    circleWrapper.classList.add('circle-body');
    mainWrapper.appendChild(circleWrapper);
    circles.push(circleWrapper);
}

function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeColorBtn() {
    circles.forEach(c => c.style.backgroundColor = generateColor());
}

let timer;
document.getElementById('changeBtn').addEventListener('click', function () {
    if (timer)
        timer = clearInterval(timer);
    else
        timer = setInterval(changeColorBtn, 300);
});

