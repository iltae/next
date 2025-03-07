"use server";

export async function createReviewAction(formData: FormData) {
  // 이 코드를 실행하는 서버 api를 만듬(서버 액션의 해시값을 통해 호출)
  // 간결하고 보안성도 좋음
  const bookId = formData.get("bookId")?.toString();
  const content = formData.get("content")?.toString();
  const author = formData.get("author")?.toString();

  if (!content || !author) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
      {
        method: "POST",
        body: JSON.stringify({ bookId, content, author }),
      },
    );
    console.log(response.status);
  } catch (err) {
    console.error(err);
    return;
  }
}
