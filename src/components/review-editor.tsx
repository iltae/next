"use client";

import { createReviewAction } from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({ id }: { id: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && !state.status) alert(state.error);
  }, [state]);
  return (
    <section>
      <form action={formAction} className="flex flex-col gap-2">
        <input name="movieId" value={id} hidden readOnly />
        <textarea
          name="content"
          placeholder="리뷰 내용"
          required
          className="box-border h-[100px] resize-y rounded-sm border p-2"
          disabled={isPending}
        />
        <div className="flex gap-4">
          <input
            name="author"
            placeholder="작성자"
            required
            className="box-border flex-1 rounded-sm border p-2"
            disabled={isPending}
          />
          <button
            className="w-[80px] cursor-pointer rounded-sm border-none bg-gray-50 p-2"
            disabled={isPending}
          >
            {isPending ? "제출 중..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
