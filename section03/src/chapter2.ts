// Unknown 타입

function unKnownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";

  let unknownVar: unknown;

  // 다운캐스팅 (X)
  // let num: number = unknownVar;
  // let str: string = unknownVar;
}

// Never 타입 (불가능을 의미하는 공집합)

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅 (O)
  let num: number = neverFunc();
  let str: string = neverFunc();

  // 다운캐스팅 (X)
  // let never1: never = 10;
  // let never2: never = "string";
}

// Void 타입
function voidExam() {
  function voidFunc() {
    console.log("hi");
  }

  // 업캐스팅 (O)
  let voidVar: void = undefined;
}

// any 타입 ()
// Any Type은 이 타입 계층도를 그냥 완벽히 무시
// 모든 타입의 슈퍼type이면서 모든 타입의 서브type임 (never 제외)
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // any타입 한정으로, unknown타입도 any타입의 다운 캐스팅
  // 본인한테 다운캐스팅 당하는 것도 가능하고, 하는 것도 가능
  anyVar = unknownVar;
  unknownVar = anyVar;

  // any타입이라도 다운캐스팅은 불가능
  // neverVar = anyVar;
}
