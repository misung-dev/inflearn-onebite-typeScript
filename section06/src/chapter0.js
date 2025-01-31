// 클래스

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열공");
  },
  introduce() {
    console.log("안녕");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 매서드
  study() {
    console.log("열공");
  }
  introduce() {
    console.log(`안녕 ${this.name}`);
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const StudentDeveloper2 = new StudentDeveloper("이정환", "B", 27, "typescript");
class StudentDeveloper {
  // 필드
  name;
  grade;
  age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
    this.favoriteSkill = favoriteSkill;
  }
}

// 새로운 객체를 만드려면 new를 붙여줌
// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("이정환", "A+", 27);
console.log(studentB);
studentB.study();
studentB.introduce();
