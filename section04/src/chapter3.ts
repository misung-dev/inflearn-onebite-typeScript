// 함수 오버로딩
// 하나의 함수를 매개변수의 개수나 타입에 따라
// 여러가지 버전으로 만드는 문법
// -> 하나의 함수 function
// -> 모든 매개변수의 타입 number
// Var1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
// Var2. 매개변수가 3개 -> 이 매개변수들을 다 더한값을 출력

// 버전들 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니처
// 오버로드 시그니처를 따라감
// func();
// func(1, 2);
// 선택적 프로퍼티(?)를 통해서 모든 시그니처들의 의미를 가질수 있도록.
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
func(1);
func(1, 2, 3);
