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

//계산기 만들기

let a;
let b;
let calculator = {
  read() {
    a = prompt('값을 입력하세요');
    b = prompt('값을 입력하세요');
  },
  sum() {
    return parseInt(a) + parseInt(b);
  },
  mul() {
    return a * b;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
