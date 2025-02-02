// 제네릭

// 제네릭 함수(함수 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있음)
// 모든 타입에 두루두루 쓸 수 있음
// T가 타입 변수
// 함수를 호출할 때마다 타입이 변함
function func<T>(value: T): T {
  return value;
}
// function func(value: unknown) {
//   return value;
// }
// return값이 any라서 모두 any로 추론됨
let num = func(10);
// num이 unknown타입이라면 어떤 연산과 매서드도 할 수 없는 전체 집합
// num.toUpperCase();
// num.toFixed();

if (typeof num === "number") {
  num.toFixed();
}

let bool = func(true);

let str = func("string");

let arr = func<[number, number, number]>([1, 2, 3]);
