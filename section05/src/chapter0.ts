// 인터페이스

interface Person {
  name: string;
  age?: number;
  SayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이정환",
  // age: 27,
  sayHi: function () {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
