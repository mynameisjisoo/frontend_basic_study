'use strict';

const logo = document.querySelector('.logo');
const itemList = document.querySelector('.section');
const shirt = document.querySelector('.nav__top');
const pants = document.querySelector('.nav__pants');
const skirt = document.querySelector('.nav__skirt');
const blue = document.querySelector('.nav__blue');
const yellow = document.querySelector('.nav__yellow');
const pink = document.querySelector('.nav__pink');

function makeItem(imgPath, gender, size) {
  const clothes = document.createElement('img');
  clothes.setAttribute('src', imgPath);
  clothes.setAttribute('class', 'clothes');

  const info = document.createElement('span');
  info.setAttribute('class', 'info');
  info.innerText = `${gender}, ${size}`;

  const item = document.createElement('article');
  item.setAttribute('class', 'section__item');
  item.appendChild(clothes);
  item.appendChild(info);
  itemList.appendChild(item);
}
makeItem('./imgs/blue_p.png', 'female', 'small');

function getSrc() {
  const item = {
    color: ['blue', 'yellow', 'pink'],
    kinds: ['pants', 'top', 'skirt']
  };
  for (let i = 0; i < item.color.length; i++) {
    for (let j = 0; j < item.kinds.length; j++) {
      console.log(item['color'][0]);
    }
  }
}

getSrc();
