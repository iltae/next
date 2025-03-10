"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(formData: FormData) {
  // 이 코드를 실행하는 서버 api를 만듬(서버 액션의 해시값을 통해 호출)
  // 간결하고 보안성도 좋음
  const movieId = formData.get("movieId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (movieId || !content || !author) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ movieId, content, author }),
      },
    );
    console.log(response.status);
    revalidatePath(`/movie/${movieId}`); // 페이지 재검증 요청 메서드, 서버측에서만 호출 가능, 페이지 모든 캐시 무효화, 풀라우트 캐시 무효화, 새로고침하면 다이내믹 페이지 생성
  } catch (err) {
    console.error(err);
    return;
  }
}
