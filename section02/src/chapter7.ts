// void
// void >> 공허 >> 아무것도 없음
// undefined만 담을 수 있음

function func1(): string {
  return "hello";
}

// return을 사용하고 싶지 않은 함수의 반환값을 void로 설정 (반환값이 없는 경우)
function func2(): void {
  console.log("hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): void {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
