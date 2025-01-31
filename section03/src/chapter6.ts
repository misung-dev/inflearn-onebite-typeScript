// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  bread: "진도", // 추가 프로퍼티
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 << 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// A인 10은 number인데 B는 string이라서 충분히 겹치치 않음 (아예 겹치는 부분이 없음)
// 겹치는 부분이 조금이라도 있어야함
// let num3 = 10 as string;

// 다중 단언 (좋은 방법은 아님)
let num3 = 10 as unknown as string;

// const 단언
// 리터럴타입으로 프로퍼티값을 수정할 수 없고 readonly가 가능함
let num4 = 10 as const;

// Non Null 단언
type Post = {
  title: string;
  author?: string; // 없을수 있으면 선택적 프로퍼티로 정의
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// null이나 undefined가 아니라는 확신을 줌 (확실할 때만 사용할 것)
const len: number = post.author!.length;
