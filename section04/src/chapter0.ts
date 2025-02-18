// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number) => a + b;

// 함수의 매개변수
// 필수 매개변수는 앞에 위치해야함
function introduce(name = "이정환", tall?: number) {
  console.log(`name: ${name}`);
  // console.log(`tall: ${tall + 10}`); //tall이 undefined일 수 있어서 오류

  if (typeof tall === "number") {
    // 타입 가드를 만들어서 타입을 좁혀줌
    console.log(`tall: ${tall + 10}`);
  }
}

introduce("이정환", 170);

// 오류 발생하지 않음
introduce("이정환");

// 인수의 갯수를 모르는 경우 (가변적인 길이)
function getSum(...rest: number[]) {
  // function getSum(...rest: [number, number, number]) { 튜플타입도 가능
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3); //6
getSum(1, 2, 3, 4, 5); // 15
