// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법을 이야기

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Person : name은 age살입니다.

function func(value: number | string | Date | null | Person) {
  value;

  // 오류 발생
  // value.toUpperCase();
  // value.toFixed();

  // 매개변수에 여러가지 타입이 들어올 수 있고, 타입에 따라 다른 동작을 하게 하는데
  // 타입 좁히기(타입 가드)를 잘 활용하면 좋음
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
  // else if (value instanceof Person) {
  // }
  else if (value && "age" in value) {
    // value가 있을때만 이라는 의미: &&
    console.log(`${value.name}은 ${value.age}살입니다.`);
  }
}
