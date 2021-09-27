'use strict';
//1. Class declarations
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
ellie.speak();

//2. Getter and setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  /* this.age를 this._age로 다르게 하는 이유
  age라는 getter를 정의하는 순간 this.age는 메모리에 올라가있는 데이터를 읽어오는게 아니라
  getter를 호출하게 되고 setter를 정의하는 순간 this.age=age 이런식으로 값이 할당될 때 바로 메모리의 값을 할당하는게 아니라 setter를 호출함
  setter 안에서 전달된 value를 this.age 에 할당할 때 메모리에 값을 업데이트하는게 아니라 setter를 호출함 (무한반복->callstack다 찼다는 오류)
  */
  get age() {
    return this._age;
  }
  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

//3.fields (public, private)
//Too soon! 아직 많이 안씀
class Experiment {
  publicField = 2;
  #privateField = 0; // # 해시기호 붙이면 private(클래스 내부에서만 값 읽고 변경 가능)
}
const experiment = new Experiment();
console.log(experiment.publicField); //2출력
console.log(experiment.privateFeild); //undefined

//4. Static properties and methods
//Too soon
class Article {
  static publisher = 'Dream Coding';
  constructor(atricleNumber) {
    this.atricleNumber = atricleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined : static은 obj마다 할당되는게 아니라 클래스자체(Article)에 붙어있는 것이라서 obj(atricle1)로 호출하면 값이 할당 안된 상태
console.log(Article.publisher);

/*object에 상관없이(들어오는 데이터에 상관없이) 공통적으로 클래스에서 쓸 수 있는 것이라면 static과 static method로 작성하는 것이
메모리 사용을 줄일 수 있음 */
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {}

class Triangle extends Shape {
  //override
  draw() {
    console.log('🔺'); // 오버라이딩해서 자식것만 나옴
    //부모의 draw도 호출하면서 오버라이딩해서 새로 정의한 draw도 호출하고 싶다하면?
    super.draw();
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6.Class checking : instanceOf
console.log(triangle.toString()); //모든 오브젝트 클래스는 오브젝트를 상속
