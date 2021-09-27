//맵(Map)은 키가 있는 데이터를 저장한다는 점에서는 객체와 유사함. 다만 맵은 키에 다양한 자료형을 허용한다.
let map = new Map(); //맵 생성

map.set('1', 'str1'); //문자형 키
map.set(1, 'num1'); //숫자형 키
map.set(true, 'bool1'); //불린형 키

//객체는 키를 문자형으로 변환하지만 맵은 키의 타입을 변환하지 않고 그대로 유지한다.
console.log(map.get(1)); //'num1'
console.log(map.get('1')); //'str1'

//맵은 키로 객체를 허용한다.
{
  let john = { name: 'John' };

  let visitsCountMap = new Map(); //고객의 방문횟수를 센다고 가정

  visitsCountMap.set(john, 123);
  console.log(visitsCountMap.get(john)); //123
}
//객체는 키로 객체를 사용할 수 없다?
{
  let john = { name: 'John' };

  let visitsCountObj = {}; //객체 생성
  visitsCountObj[john] = 123; //객체(john)를 키로 해서 객체에 값 저장

  //원하는 값(123)을 얻으려면
  console.log(visitsCountObj['object Object']); //123
}
{
  let map2 = new Map();
  map2
    .set('1', 'str') //
    .set(1, 'num')
    .set(true, 'bool');
  console.log(map2);
}
{
  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
  ]);

  //키(vegetable)를 대상으로 순회
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); //cucumber, tomatoes, onion
  }

  //값(amount)대상으로 순회
  for (let amount of recipeMap.values()) {
    console.log(amount); //500, 350, 50
  }

  //[키, 값]쌍을 대상으로 순회
  for (let entry of recipeMap) {
    //recipeMap.entries()와 동일
    console.log(entry); //['cucumber',500], [],[]
  }
}

//셋
{
  let set = new Set();

  let callum = { name: 'Callum' };
  let luke = { name: 'Luke' };
  let mike = { name: 'Mike' };

  set.add(callum);
  set.add(luke);
  set.add(mike);
  set.add(callum);
  set.add(callum);
  set.add(callum);

  console.log(set.size); //3

  for (let user of set) {
    console.log(user.name);
  }
}

//배열에서 중복요소 제거하기

{
  function unique(arr) {
    // let set = new Set(arr);
    // return set;
    return Array.from(new Set(arr));
  }

  let values = [
    'Hare',
    'Krishna',
    'Hare',
    'Krishna',
    'Krishna',
    'Krishna',
    'Hare',
    'Hare',
    ':-O'
  ];

  console.log(unique(values));
}
