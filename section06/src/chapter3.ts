// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

// interface는 public만 가능
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
