// 프로미스

import { resolve } from "path";

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 타입지정을 안하면 기본적으로 비동기 작업 처리의 결과값이 unknown타입으로 추론됨
    // resolve(20);

    // 실패했을때 타입은 정해줄 수 없음
    reject("~~때문에 실패");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 10); // 20
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

// Promise 객체를 사용할 때 타입변수를 직접 할당하지 않으면
// 비동기 처리의 결과값이 unknown으로 추론됨
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글 컨텐츠",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
