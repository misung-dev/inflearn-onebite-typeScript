// any (어떤 값이든 할당 가능)
// 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

// unknown (어떤 값이든 할당 불가)
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// if (typeof unknownVar === "number") {
//   num = unknownVar;
// }
