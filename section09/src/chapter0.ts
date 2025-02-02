// 조건부 타입

type A = number extends string ? string : number;

// 슈퍼타입
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
// 제네릭과 함께 써야 위력이 더 잘 발휘

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// function removeSpaces<T>(text: T): T extends string ? string : undefined {
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any;
  }
}

let result = removeSpaces("Hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
