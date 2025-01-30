//object
// 구조적 타입 시스템 (property based system) <<
// 명목적 타입 시스템
// ?는 있어도 되고 없어도 됨 (optional property) 있어야한다면 number 타입이여야함
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// API KEY처럼 절대값으로 값 변경이 안되는 경우
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
