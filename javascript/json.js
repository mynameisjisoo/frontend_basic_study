//1. Object to JSON
//Stringfy(obj)
let json = JSON.stringify(true);
console.log(json);
json = JSON.stringify(["apple", "banana"]);
console.log(json);
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
  favorite: {
    food: ["carrot", "lettuce", "snack"],
    person: "jisu",
  },
};
json = JSON.stringify(rabbit, ["name"]); //rabbit ocject에서 이름만 json으로 전달하려고 할때
console.log(json);
json = JSON.stringify(rabbit, ["favorite", "food"]);
console.log(json);

json = JSON.stringify(rabbit);
console.log(json);
/*jump()라는 함수는 json에 포함되지않음. 함수는 object에 들어있는 데이터가 아니라서 
json에 포함되지않음. symbol같은 js에만있는 특별한 데이터도 포힘되지 않음*/

//원하는 properth만 json으로 변환하기

console.clear();
const objj = {
  x: "x",
  y: "y",
  z: {
    z1: "z1",
  },
};
function replacer(key, value) {
  console.log(key + ":" + value);
  if (key === "x") {
    return undefined;
  } else {
    return value;
  }
}
const json2 = JSON.stringify(objj, replacer);
console.log("json2" + json2);

//콜백함수이용해서 세밀하게 통제하기
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});
console.log(json); //제일 처음 전달되는건 토끼오브젝트 싸고있는 최상위 것
//그래서 이런식으로 조건 줄 수도 있음
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);
console.clear();
console.log(json);
//2. JSON to Object
//parsr(JSON)
const obj = JSON.parse(json);
console.log(obj); //제이슨을 오브젝트로 바꾸기 끝
rabbit.jump();
//주의할 점- 함수는 포함 안됨
//obj.jump(); //err! rabbit이라는 object->json과정에서 함수는 포함안됨 그러므로 그 json을 다시 오브젝트로 변환해도 jump라는 함수는없음

//주의할점
console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); //err!! birthdate는 string(obj->json과정에서 string으로 변환됐기때문)

//그래서 obj->json 변환시 세밀하게 reviver인자를 넣어서 변환한다.
const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value; //모든 key와 value출력됨
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2);
console.log(obj2.birthDate.getDate());
