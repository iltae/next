import { createReviewAction } from "@/actions/create-review.action";

export default function ReviewEditor({ id }: { id: string }) {
  return (
    <section>
      <form action={createReviewAction} className="flex flex-col gap-2">
        <input name="bookId" value={id} hidden readOnly />
        <textarea
          name="content"
          placeholder="리뷰 내용"
          required
          className="box-border h-[100px] resize-y rounded-sm border p-2"
        />
        <div className="flex gap-4">
          <input
            name="author"
            placeholder="작성자"
            required
            className="box-border flex-1 rounded-sm border p-2"
          />
          <button className="w-[80px] cursor-pointer rounded-sm border-none bg-gray-50 p-2">
            작성하기
          </button>
        </div>
      </form>
    </section>
  );
}
