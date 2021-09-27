function init() {
  var name = 'Mozilla'; // name은 init에 의해 생성된 지역 변수이다.
  function displayName() {
    // displayName() 은 내부 함수이며, 클로저다.
    console.log(name); // 부모 함수에서 선언된 변수를 사용한다.
  }
  displayName();
}
// init();

function makeFunc() {
  var name = 'mozilla';
  function displayName() {
    console.log(name); //mozilla
  }
  return displayName;
}
var myFunc = makeFunc();
//displayName()함수가 실행되기 전에 외부함수인 makeFunc()로부터 리턴되어 myFunc변수에 할당됨
//myFunc는 makeFunc이 실행될때 생성된 displayName함수의 인스턴스에 대한 참조
//displayName의 인스턴스는 변수 name이 있는 환경에 대한 참조 유지
myFunc();

{
  function outter() {
    var title = 'coding everybody';
    function inner() {
      console.log(title);
    }
    inner();
  }

  outter();
}

{
  function outter() {
    var title = 'coding everybody';
    var inner = function () {
      console.log(title);
    };
    inner();
  }
  outter();
}

//inner함수의 내부에 title이라는 지역변수가 존재하지않으면
//inner함수를 포함하는 바깥쪽 함수(outter)에서 title이라는 변수를 찾아서 참조함
//즉 내부함수에서 외부함수의 지역변수에 접근가능함

//흥미로운 내용: 외부함수가 소멸되어도 내부함수에서 접근 가능

{
  function outter() {
    var title = 'coding everybody';
    return function () {
      console.log(title);
    };
  }
  inner = outter();
  inner();
  /*outter는 내부함수를 리턴함=outter는 생 마감
  그럼에도 불구하고 내부함수에서 이미 사라진 외부함수의 title에 접근이 가능하다?
  내부함수를 포함하는 외부함수에 접근가능함 + 외부함수가 실행 종료된 이후에도 내부함수에서 외부함수로 접근 가능함
  
  outter를 실행하면 익명함수(alert만 있는)를 리턴하고 그 결과물을 inner라는 변수에 담음
  inner에는 alert(title)밖에 없는데도 실행하면 'coding everybody'가 출력됨
  이것은 외부함수의 지역변수 title이 소멸되지않았다는 것을 의미함. 
  클로저란 내부함수가 외부함수의 지역변수에 접근할 수 있고 + 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때 까지 소멸되지 않는 특성 의미

  */
}

{
  function factory_movie(title) {
    return {
      get_title: function () {
        return title;
      },
      set_title: function (_title) {
        title = _title;
      }
    };
  }
  ghost = factory_movie('Ghost in the shell');
  matrix = factory_movie('Matrix');
  console.log(ghost.get_title());
  console.log(matrix.get_title());
  ghost.set_title('공각기동대');
  console.log(ghost.get_title());
  console.log(matrix.get_title());

  /*factory_movie라는 함수는 객체를 리턴함. 그 객체에는 get_title, set_title이라는 메소드 속성이 있음 
  get_title, set_title은 factory_movie에 대한 내부함수임
  get_title이 return 하는 title은 factory_movie의 매개변수 title임
  set_title의 매개변수 _title이 title에 할당되고 title은 내부변수를 가르키기 때문에 매개변수 title을 의미함.
  */

  /*
   * factory_movie를 통해서 두개의 객체(ghost, matrix)를 만들었고, 그 객체는 각각 자신들이 실행된 그 시점에서의 외부함수의 지역변수에 접근 가능하고
   * 그 지역변수의 값은 유지가 됨. ghost.set_title을 이용하는 것은 ghost 객체가 접근 가능한 title 값만 바꾸는 것이지, matrix객체가 접근 가능한 title에는 영향X
   */

  /* private하게 처리 가능
   * factory movie는 get,set 리턴함으로써 소멸함,그래서 factory_movie의 title은  내부함수인 get_title과 set_title을 이용해서만 접근 가능한 변수가 됨
   * set_title에서 title의 변수의 값을 지정할 수 있음.
   * ex) if(typeof _title != 'string') {alert("문자열을 입력하세요")}
   */
}
{
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }
  for (var index in arr) {
    console.log(arr[index]());
  }
}
//i++의 i값은 외부변수의 값이 아니라서?
//수정하면
{
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return function () {
        return i;
      };
    };
    for (var index in arr) {
      console.log(arr[index]());
    }
  }
}

{
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = function () {
      console.log(i);
    };
  }
  for (let index in arr) {
    console.log(arr[index]());
  }
}

console.clear();

{
  var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function () {
        changeBy(1);
      },
      decrement: function () {
        changeBy(-1);
      },
      value: function () {
        return privateCounter;
      }
    };
  })();

  console.log(counter.value()); //  0
  counter.increment();
  counter.increment();
  console.log(counter.value()); //  2
  counter.decrement();
  console.log(counter.value()); //  1
}
