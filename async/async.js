'use strict';
//async & await

//1.async
async function fetchUser() {
  //10초 후에 받아오는코드가 있다면..
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

//2. await : async가 붙은 함수안에서만 쓸 수 있음

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); //정해진 ms가 지나면 resolve를 호출하는 promise
}
async function getApple() {
  await delay(1000); //await: delay가 끝날때까지 기다려줌 (1초 후 apple리턴)
  return 'apple';
}
async function getBanana() {
  await delay(1000);
  return 'banana';
}
//이렇게 하는게 더 간단함 -근데 직렬적으로 하게되니 1초+1초씩 걸림
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// //promise chaning 너무 많이 하면 ㅠㅠ
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// }

//all이라는 api : 프로미스배열을 전달하면 모든 프로미스들이 병렬적으로 받을때까지 모아줌
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

//먼저 실행되는 첫번째만 받아올 때
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
