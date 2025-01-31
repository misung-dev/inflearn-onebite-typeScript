// 대수 타입
// -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// -> 합집합 타입과 교집합 타입이 존재

// 1. 합집합 - union 타입
let a: string | number;
a = 1;
a = "hi";

let arr: (number | string | boolean)[] = [1, "hi,true"];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

// 합집합으로 넣었는데 괜춘
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 교집합만 넣었는데 오류 발생
// Dog도 Person도 아닌 경우라서
// let union4: Union1 = {
//   name: "",
// };

// 2. 교집합 타입 - Intersection 타입
let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
