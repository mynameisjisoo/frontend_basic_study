const person1 = { name: 'bob', age: 2 };
// const person4 = makePerson;
// function makePerson(name, age) {
//   return {
//     // name: name,
//     // agg: age,
//     name,
//     age, //이렇게 name: 을 생략도 가능함
//   };
// }

//constructor function
const person2 = new Person('ellie', 40);
function Person(name, age) {
  this.name = name;
  this.age = age;
}
console.log(person2);

//5. in operator (key가 obj안에 있는지 없는지 확인)
console.log('name' in Person);

//6. for in
for (key in Person) {
  console.log(key);
}

//for of
//array의 모든 값이 value에 할당됨 (그냥 for문이랑 같은 효과)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// //fun cloning
const user = { name: 'ellie', age: '20' };
// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

//fun cloning 다른 방법
const user4 = Object.assign({}, user);
console.log(user4);

//fun cloning another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mix.color); //뒤에것이 덮어씀
