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
    revalidatePath(`/movie/${movieId}`); // 페이지 재검증 요청 메서드, 서버측에서만 호출 가능, 페이지 모든 캐시 무효화, 풀라우트 캐시 무효화, 다음 요청에서 다이내믹 페이지 생성
    /*
    - 특정 경로의 모든 동적 페이지 재검증 (폴더 또는 파일의 경로 명시)
    revalidatePath("/book/[id]", "page");
    - 특정 레이아웃을 갖는 모든 페이지 재검증
    revalidatePath("/(with-searchbar)", "layout");
    - 모든 데이터 재검증
    revalidatePath("/", "layout");
    - 태그 기준, 데이터 캐시 재검증(가장 효율적)
    revalidateTag(`review-${movieId}`); -- { next : { tags : [`review-${movieId}`] }} -- 요청에 태그 설정
    */
  } catch (err) {
    console.error(err);
    return;
  }
}
