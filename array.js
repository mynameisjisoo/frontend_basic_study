"use strict";
console.clear();
const fruits = ["apple", "banana", "melon"];
//for each : 배열안의 value마다 내가 전달한 함수를 출력

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});
fruits.forEach(function (element) {
  console.log(element);
});

//for each + arrow 함수 (한줄만 있는 경우는 괄호도 생략가능)
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));

//push -addition
console.log(fruits);
fruits.push("peach", "mango");
console.log(fruits);
fruits.pop();
fruits.pop();

//shift, unshift는 pop, push보다 매우 느림!

//unshift (앞에서부터 push)
console.log(fruits);
fruits.unshift("lemon", "orange");

//shift (앞에서부터 삭제)
console.log(fruits);
fruits.shift();
console.log(fruits);

//(splice) 지정된 index의 데이터 지우기 (원본arr가 바뀜)
console.log(fruits); //) ["orange", "apple", "banana", "melon", "peach"]
fruits.splice(0, 2); //0부터 2개 지워짐
console.log(fruits);
fruits.splice(1); //인덱스 1부터 다 지워짐
console.log(fruits);
fruits.splice(1, 2, "사과", "바나나"); //1부터 2개 지우고 그자리에 채워넣음
console.log(fruits);

//searching 배열에어떤값이 어떤 인덱스에 있는지
console.log(fruits.indexOf("사과")); //배열안에 해당값없으면 -1리턴
console.log(fruits.includes("코코넛")); // t/f로 리턴

console.log(fruits);
console.log(fruits.join());
//sort
const array = [10, 22, 6, 11, 15];
console.log(
  array.sort(function (a, b) {
    return b - a;
  })
);

//slice (start, end) (end는 exclusive라 배제됨)
//splice는 배열자체를 수정, slice는 배열에서 원하는 부분만 수정해서 받아올 때
const array2 = [0, 1, 2, 3, 4];
const result = array2.slice(2, 5);
console.log(array2); //[0, 1, 2, 3, 4]
console.log(result); //[2, 3, 4]

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];
console.log(students);
console.log("==================");
//5.find a student with the score 90
{
  const result2 = students.find(function (student, index) {
    console.log(Student, index);
  });
}

{
  const result = students.find(function (element) {
    console.log(element.score === 45);
  });
}
console.log("---------------------");
//callback 함수는 boollean 타입 리턴해ㅑㅇ 함.
const result2 = students.find(function (student, index) {
  return student.score === 90;
});
console.log(result2);
console.log("---------------------");

//결과
const result3 = students.find((student) => student.score === 90);
console.log(result3);

//6.학생들 중에서 수업에 등록한(enroll이 true인) 학생만 골라서 배열로 만들기
console.clear();
const result4 = students.filter((student) => student.enrolled);
console.log(result4);

{
  const result = students.filter(function (element) {
    return element.enrolled;
  });
  console.log(result);
}

//7. 학생 점수에서 점수만 있는 배열 만들기

/*mapping : 배열에 있는 요소 한가지 한가지를 다른 것으로 변환해주는 것 
지정된 콜백함수를 호출하면서 각각의 요소를 함수를 거쳐서 새로운 값으로 변환하는 것 
콜백함수에 따라 요소가 mapping 되어서 만들어짐
*/
{
  const result = students.map((student) => student.score); //학생점수를 2배곲한 값을 배열로 받겠다?하면 student.score*2
  console.log(result);
}

//8.학생중에 점수가 50점보다 낮은 학생이 있는지 체크 (true가 return 되어야 함)
/*some : 배열의 요소중에서 콜백함수 리턴값이 true가 되는게 있는지 없는지
 */
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}
//every : 배열의 있는 모든 요소들이 조건을 충족해야 true
{
  const result = students.every((student) => student.score < 50);
  console.log(result);
}
//배열중에 어떤 조건을 만족하는 요소가 있는지를 확인 -> some
//배열의 모든 요소가 어떤 조건을 만족하는지 확인 -> every

//9.학생들의 평균 점수
/* callback함수와 initial value, 리턴되는 값은 누적된 값을 리턴 
reduce : curr에 배열 하나씩 전달이 되는데 prev는 리턴한 값이 그 다음에 호출될 때 연결됨
즉 우리가 원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적하는 것!!*/
console.log("====여기==========");
//1.1
{
  const result = students.reduce((prev, curr) => {
    console.log("-----------");
    console.log(prev);
    console.log(curr);
    return curr; //콜백함수는 리턴값을 줘야됨
  }, 0); //init value를 0으로 주니까 0부터 시작됨 init 안주면 studenteA부터 시작해서 abcd로 시작됨
}
// console.clear();
// {
//   const result = students.reduce((pre, curr, idx, arr) => {
//     console.log(idx);
//     console.log(pre.score + " " + curr.score);
//   }, 0);
// }
//1.2
{
  const result = students.reduce((prev, curr) => {
    console.log("-----------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score; //순차적으로 누적된 값이 전달되도록?
  }, 0);
  console.log(result);
}
//1.3  - 1.2를 간단하게 + 최종으로 평균값 구하기
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

//10 학생들의 점수를 한줄의 string으로
{
  const result = students.map((student) => student.score).join(); //점수만 따로 뽑아서 배열로 만듬 + join을 이용해서 스트링으로 만듬
  console.log(result);
}
//만약 위 추가하여 50점 이상인 애들만 출력하면?
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

//학생들의 점수를 asc정렬
{
  const result = students.map((student) => student.score).sort();
  console.log(result);
}
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}
