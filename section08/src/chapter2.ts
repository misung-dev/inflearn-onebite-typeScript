// keyof 연산자
// 객체타입에 적용하는 연산

interface Person {
  name: string;
  age: number;
}

// keyof Person: person 객체 타입의 모든 프로퍼티의 키를 union 타입으로 추출
// 프로퍼티가 아무리 많고 자주 바뀌어도 keyof 연산만 하면 객체타입의 프로퍼티를 union 가능
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");
