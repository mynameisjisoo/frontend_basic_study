'use strict';
//promise : javaScript 내장 객체 , state와 producer,consumer에 초점 맞춰서 공부
//state: pending ->operation 수행중일때 , fulfilled or rejected 완료되거나 실패했을 때
//Producer(데이터 제공) vs consumer(데이터소비)

//1.producer
//promise는 만드는 순간 executor라는 내장 콜백함수가 바로 자동으로 실행됨!

const promise = new Promise((resolve, reject) => {
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie') //성공하면 resolve라는 콜백함수 실행
    //reject(new Error('no network'));
  }, 2000);
});

//2. consumers: then, catch, finally
promise
  .then(value => {
    //promise가 정상적으로 실행되면 then value값이 들어옴
    console.log(value);
  })
  .catch(error => {
    //error 발생 시 (예외처리)
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  }); //성공하던실패하던 반드시 호출됨

//3.Promise Chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

//4. Error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    //setTimeout(() => resolve(`${hen}=>🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen}=>🥚`)), 1000); //만약 여기에서 에러가 발생한다면?
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>🍳`), 1000);
  });

getHen()
  .then(hen => getEgg(hen))
  .catch(error => {
    //에러가 발생하면? 대신 이렇게 처리하도록 빵구처리
    return '🍰';
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal));
//   .catch(console.log);

/*콜백함수 전달할 때 받아오는 value를 바로 다른 함수로 그대로 전달할때는 이렇게 생략가능 
  getHen()
  .then(getEgg)
  .then(cook)
  .then(console.log);
  */
