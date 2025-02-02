// 첫번째 사례

// 타입변수를 여러개 선언 가능
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 두번째 사례

// 튜플 타입은 특정 인덱스에 해당하는 요소의 타입을 지정할 수 있는 기능 있음

// 첫번째 요소의 타입은 T고 나머지 요소는 그냥 뭐 배열로 여러개 들어올 것 같은데, 그것들의 타입은 모르겠다~
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
//0

let str = returnFirstValue([1, "hi", "name"]);
// 'hi'

// 세번째 사례

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); /// 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10);
