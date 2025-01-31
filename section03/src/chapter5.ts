// 타입 추론
// 초기에 변수로 선언한 타입이 자동으로 추론함

// 함수의 반환값 타입도 가능.
// return 문 다음에 오는 값을 추론
// 매개변수에 기본값으로 설정되어 있으면, 기본값을 기준으로 추론
function func(message = "Hello") {
  return "hi";
}

let { id, name, profile } = c;

let [one, two, three] = [1, "hi", true];

// 황당한 경우
let d; // 초기값이 없으면 암묵적으로 any타입으로 추론하게 되는데, 타입이 지속적으로 진화를 하게됨
d = 10; // any >> number 타입으로 진화
d.toFixed();

d = "hi"; // string 타입으로 진화
d.toUpperCase();
// 숫자타입이 문자열타입으로 변경되어서 toFixed가 오류 발생
// d.toFixed();

// const는 초기값을 기준으로 리터럴타입을 가짐
const num = 10;
const str = "hello";

// union 타입
let arr = [1, "string"];

// 타입넓히기
// const가 아닌 이상, 타입을 넓혀서 리터럴타입이 아닌 number타입 등의 형식으로 범용적으로 변수를 사용할 수 있도록 하기.
