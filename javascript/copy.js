'use strict';
//1. shallow copy
{
  const obj = { value: 1 };
  const objCopy = obj; // 변수 obj가 가르키던 주소의 값이 objCopy에 할당됨

  objCopy.value = 1000;
  console.log(obj.value);
  console.log(objCopy.value);
  console.log(obj === objCopy);
}
// 2. Deep copy
// 2-1 Object.assign() : 다차원객체 값복사 안됨
// obj객체의 b property의 값인 2차원 객체 => {가:'안녕'} 은 깊은 복사 안됨
{
  const obj = {
    a: 1,
    b: { 가: '안녕' }
  };
  const objCopy = Object.assign({}, obj);
  objCopy.b.가 = 'hello';
  console.log(obj);
  console.log(objCopy);
}
console.clear();

//2.2 spread syntax : 다차원객체 값복사 안됨
{
  const obj = {
    a: 1,
    b: { c: '이지수' }
  };
  const objCopy = { ...obj };
  objCopy.b.c = '이치타';

  console.log(obj);
  console.log(obj.b.c === objCopy.b.c);
}

//2.3 JSON.stringfy, JSON.parse : 함수나 심볼 복사 안됨
{
  const obj = {
    a: 1,
    b: { c: '이지수' },
    d: function () {
      console.log('function');
    }
  };
  const objCopy = JSON.parse(JSON.stringify(obj));
  objCopy.b.c = '이치타';
  console.log(obj);
  console.log(objCopy.d); //undefined
}

//2.4 커스텀 재귀함수
{
  function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; //객체 아니면 그냥 값 갖고 반복문으로 돌아감
    }
    let copy = {};
    for (let key in obj) {
      copy[key] = deepCopy(obj[key]);
    }
    return copy;
  }

  const obj = {
    a: 1,
    b: { c: '이지수' },
    d: function () {
      console.log('function in obj!');
    }
  };
  const objCopy = deepCopy(obj);
  obj.b.c = '이치타';
  console.log(obj.b.c); //이치타
  objCopy.d();
}
