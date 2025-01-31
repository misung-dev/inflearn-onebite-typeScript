// 객체 타입간의 호환성
// -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

// 조건이 더 적은것이 슈퍼타입이 됨
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  bread: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도",
};

// 가능 (업캐스팅)
animal = dog;
// 불가능 (다운캐스팅)
// dog = animal;

// 초과 프로퍼티 검사
type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

// 업캐스팅이라 가능
book = programmingBook;

// 객체타입에 정의된 것만 넣기
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: 'reactjs'
};

// 객체 리터럴을 사용한 것이 아니므로 초과프로퍼티 검사가 발동하지 않아 허용됨
let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: 'reactjs'
});

// 변수에 저장해 두었다가 인수로 변수를 전달
func(programmingBook);
