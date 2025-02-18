// Partial<T>
// 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "나중에",
  content: "초안",
};

// Required<T>
// 필수의, 필수적인
// 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
// thumbnailURL은 반드시 있어야하므로 이때 반드시 사용하도록

type Required<T> = {
  [key in keyof T]: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한입타스 추가",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https",
};

// Readonly<T>
// 읽기전용 수정불가
// 특정 객체 타입에서 모든 프로퍼티를 읽기전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};
