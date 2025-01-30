// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 숫자를 지정하지 않아도 자동으로 할당이 됨 (숫자형 이넘))
  USER = 10,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이정환",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 일반 유저
  language: Language.english,
};

const user3 = {
  name: "아무개",
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);
