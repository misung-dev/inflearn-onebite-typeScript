// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winter"];

let booArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
// 순서나 길이가 다르면 안됨
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
];
