'use strict';

const logo = document.querySelector('.logo');
const shirt = document.querySelector('.nav__top');
const pants = document.querySelector('.nav__pants');
const skirt = document.querySelector('.nav__skirt');
const blue = document.querySelector('.nav__blue');
const yellow = document.querySelector('.nav__yellow');
const pink = document.querySelector('.nav__pink');

function classificate() {
  let clothes = {
    color: ['blue', 'pink', 'yellow'],
    kinds: ['top', 'pants', 'skirt'],
    gender: ['man', 'female'],
    size: ['small', 'large']
  };
  //   console.log(clothes.color);
}
classificate();
