function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
// ask(
//   '동의하십니까?',
//   function () {
//     alert('동의함');
//   },
//   function () {
//     alert('취소');
//   }
// );

const askArrow = question => {
  if (confirm(question)) () => alert('동의함');
  else () => alert('취소');
};

function min(a, b) {
  return a < b ? a : b;
}

//제곱반환하는 함수 만들기
/*function pow(x, n) {
  let tmp = 1;
  for (let i = 0; i < n; i++) {
    tmp *= x;
  }
  alert(tmp);
}

const x = prompt('x');
const n = prompt('n');

n >= 1 ? pow(x, n) : alert('자연수입력');
*/

//객체 기본
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//객체가 비었는지 확인

/*
let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
alert(isEmpty(schedule));
schedule['8:30'] = 'get up';
alert(isEmpty(schedule));
*/

//프로퍼티 합계 구하기
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
function getSum(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    sum += salaries[salary];
  }
  alert(sum);
}

getSum(salaries);
*/

//프로퍼티 값 두배로 부풀리기
/*
function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2;
    }
  }
}

// 함수 호출 전
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
multiplyNumeric(menu);
console.log(menu);

// 함수 호출 후
menu = {
  width: 400,
  height: 600,
  title: 'My menu'
};
*/

//메서드 만들기1
/*
  let user ={
  name="john",
  age = 30
};
 user.sayHi= function(){
   alert("안녕하세요")
 }

user.sayHi();


//메서드만들기2
{let user ={
  name="John",
  age=30
};
function sayHi(){
  alert("HI")
};
user.sayHi = sayHi;
user.sayHi();
}

//메서드 단축
//단축전
{user = {
  sayHi: function(){
    alert("hello")
  }
}
}
//단축후
{user = {
  sayHi(){
  alert("hello")
  }
}
}

*/
/*
{
let user = { name: 'John' };
let admin = { name: 'Admin' };

function sayHi() {
  alert(this.name);
}
//별개의 객체에서 동일한 함수를 사용함
user.f = sayHi;
admin.f = sayHi;

//this는 점(.)앞의 객체를 참조하기때문에 this값이 달라짐
user.f(); //John
admin.f(); //Admin

admin['f'](); //Admin (점과 대괄호는 동일하게 동작)
}
*/

function sayHi() {
  // console.log(this);
  // alert(this.sayHi);
}
sayHi();

// console.log(document.body); //내용 출력
// console.dir(document.body); //속성 출력

// var foo = function () {
//   console.dir(this);
// };

// //1. 함수 호출
// foo(); //window
// //window.foo();

// //2. 메소드 호출
// var obj = { foo: foo };
// obj.foo(); //obj (object)

// //3. 생성자 함수 호출
// var instance = new foo(); //instance (foo)

// //4.apply / call / bind 호출
// var bar = { name: 'bar' };
// foo.call(bar); //bar
// foo.apply(bar); //bar
// foo.bind(bar)(); //bar;

{
  var ga = 'Global variable';
  console.log(ga);
  console.log(window.ga);

  function foo() {
    console.log('invoked!');
  }
  window.foo();
}

{
  function foo() {
    console.log("foo's this: ", this);
    function bar() {
      console.log("bar's this :", this);
    }
    bar();
  }
  foo();
}

{
  var value = 1;
  var obj = {
    value: 100,
    foo: function () {
      console.log("foo's this: ", this); // obj
      console.log("foo's this.value: ", this.value); // 100
      function bar() {
        console.log("bar's this: ", this); // window
        console.log("bar's this.value: ", this.value); // 1
      }
      bar();
    }
  };
  obj.foo();
}

/*
{
  var value = 1;

  var obj = {
    value: 100,
    foo: function () {
      setTimeout(function () {
        console.log("callback's this: ", this); //window
        console.log("callback's this.value: ", this.value); //1
      }, 100);
    }
  };
  obj.foo();
}
*/
//내부함수의 this가 전역객체를 참조하는 것을 회피하는 방법
{
  var value = 1;

  var obj = {
    value: 100,
    foo: function () {
      var that = this;
      console.log("foo's this: ", this); // obj
      console.log("foo's this.value: ", this.value); // 100
      function bar() {
        console.log("bar's this: ", this); // window
        console.log("bar's this.value: ", this.value); // 1

        console.log("bar's that: ", that); // obj
        console.log("bar's that.value: ", that.value); // 100
      }
      bar();
    }
  };
}

{
  var value = 1;

  var obj = {
    value: 100,
    foo: function () {
      console.log("foo's this: ", this); // obj
      console.log("foo's this.value: ", this.value); // 100
      function bar(a, b) {
        console.log("bar's this: ", this); // window
        console.log("bar's this.value: ", this.value); // 1
        console.log("bar's arguments: ", arguments);
      }
      bar.apply(obj, [1, 2]);
      bar.call(obj, 1, 2);
      bar.bind(obj)(1, 2);
    }
  };
  obj.foo();
}
console.clear();

{
  const str = 'Hello';
  console.log(str[1]);
}
{
  var sym1 = Symbol();
  var sym2 = Symbol('foo');
  var sym3 = Symbol('foo');

  console.log(sym2 === sym3);
}

{
  let user = {
    firstName: 'JISOO',
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow(); //arrow의 this는 외부함수 user.sayHi()의 this가 됨
    }
  };
  user.sayHi(); //JISOO
}

//계산기 만들기
// {
// let calculator = {
// a: 0,
// b: 0,
// read() {
//   (this.a = +prompt('a:')), (this.b = +prompt('b:'));
// },
// sum() {
//   return this.a + this.b;
// },
// mul() {
//   return this.a * this.b;
// }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// }

// {
//   const a = +prompt('a: ');
//   const b = +prompt('b: ');
//   console.log(typeof a, typeof b);
// }

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  }
};
ladder.up().up().down().showStep();

console.clear();
{
  let obj1 = {
    name: 'lee',
    print: function () {
      console.log(this.name);
    }
  };

  let obj2 = {
    name: 'ji',
    print: obj1.print
  };

  let name = 'soo';
  let print = obj1.print;

  print(); //soo
  obj1.print(); //lee
  obj2.print(); //ji
}

{
  let obj = {
    print: function () {
      console.log(this);
    }
  };
  let print = obj.print;

  obj.print();
  print();
}
//new 키워드와 this binding
//new로 선언할 경우 this는 생성된 객체 자체를 가리킴

{
  function printName() {
    let lastName = 'lee';
    this.firstName = 'jisoo';
    console.log(this.lastName + ' ' + this.firstName);
  }
  let lastName = 'kim';
  printName();
  let o = new printName();
}
