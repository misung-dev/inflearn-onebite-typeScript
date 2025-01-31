// 선언 합침
// 동일한 이름으로 중복선언하면 프로퍼티가 합쳐짐
interface Person {
  name: string;
}

interface Person {
  // name: number 타입을 다르게 다시 선언하는 것: 충돌 (X), 반드시 동일한 타입으로 선언할 것
  age: number;
}

const person: Person = {
  name: "",
  age: 27,
};

// 모듈 보강

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: "hi", // 임의대로 객체를 추가하려고 할때
};
