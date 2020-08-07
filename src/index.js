require('./index.scss')
const imgHappy = require('./happy.jpg')
const imgLogo = require('./logo.png')

console.log('hello webpack!')

function makeImg(imgSrc) {
    let rImg = new Image();
    rImg.src = imgSrc;
    element.appendChild(rImg);
}

let element = document.createElement('div');
makeImg(imgHappy);
makeImg(imgLogo);
document.body.appendChild(element);