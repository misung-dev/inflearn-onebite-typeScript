// 인터페이스의 확장 (다른 말로 상속)
// 기존의 프로퍼티에서 추가함
// 객체타입이면 확장 가능

type Animal = {
  name: string;
  color: string;
};
// interface Animal {
//   name: string;
//   color: string;
// }

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

// 인터페이스의 다중 확장
const dogcat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
