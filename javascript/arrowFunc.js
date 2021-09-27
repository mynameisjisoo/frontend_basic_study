//화살표함수에는 없는 것 : 함수이름, this, arguments

const muFun = function () {};

// 이름 없음 : 이름을 지정하지 않고 변수에 넣어서 쓴다.
const myFun = () => {};

//this가 없다.

//일반함수에서의 this예시
{
  const btn = document.getElementById('btn');
  var myObj = {
    count: 3,
    setCounter: function () {
      console.log(this.count);
      btn.addEventListener('click', function () {
        console.log(this); //this : button (button이 함수를 호출했으니까)
      });
    }
  };
  myObj.setCounter(); //this : myObj
}

//일반함수에서의 this예시 (bind)
{
  const btn = document.getElementById('btn');
  var myObj = {
    count: 3,
    setCounter: function () {
      console.log(this.count);
      btn.addEventListener(
        'click',
        function () {
          console.log(this); //원래 this : button인데 밖에있는 this (myObj)를 쓰기위해 bind 하면 this : myObj가 됨
        }.bind(this)
      );
    }
  };
  myObj.setCounter(); //this : myObj
}

//화살표함수에서의 this (스코프상에 this가 없기 때문에 함수가 선언된 위치의 this를 가져옴)
{
  const btn = document.getElementById('btn');
  var myObj = {
    count: 3,
    setCounter: function () {
      console.log(this.count);
      btn.addEventListener('click', () => {
        console.log(this); //this: myObj (함수가 선언된 위치인 setCounter의 this를 쓰게됨)
        console.log(this.count++);
      });
    }
  };
  myObj.setCounter();
}

//this가 없기 때문에 생성자 사용 할 수 없음, 프로토 타임 존재 x

//arguments
{
  const myFun = function () {
    console.log(arguments);
  };
  myFun(1, 2, 3, 4); //1 2,3,4

  const myFun2 = () => {
    console.log(arguments);
  };
  //   myFun2(1, 2, 3, 4); //ERROR: arguments is no defined!!!!
}

//화살표함수는 arguments가 없으면 자신이 선언된 스코프에서 가져온다.
{
  function outter() {
    const myFun2 = () => {
      console.log(arguments); //1 2,3,4
      //arrow function에서의 arguments가 없기때문에 arrow func이 선언된 스코프의 arguments를 찾음
    };
    myFun2();
  }
  outter(1, 2, 3, 4);
}

//화살표함수에서 인자 받는방법
{
  const myFun2 = (...args) => {
    console.log(args);
  };
  myFun2(1, 2, 3);
}
