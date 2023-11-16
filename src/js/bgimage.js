const images = ["beom.jpg"];
const body = document.querySelector("body");

body.classList.add("img");

const randomBgImg = images[0];
randomBgImg.style.width = '156px';
randomBgImg.style.height = 'auto';
const definedBgImg = new Image();

definedBgImg.style.width = '156px';
definedBgImg.style.height = 'auto';
definedBgImg.src = `https://tw3wt.github.io/nomadcoder_makeChrome/img/${randomBgImg}`;

document.body.style.backgroundImage = `url(${definedBgImg.src})`;
