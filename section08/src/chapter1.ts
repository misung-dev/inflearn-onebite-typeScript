// 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// Post의 특정 프로퍼티만 가져올 수 있는 방법
// index에는 값이 아닌 타입만 명시할 수 있음
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

printAuthorInfo(post.author);
