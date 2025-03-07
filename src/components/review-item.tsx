import { ReviewData } from "@/types";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  bookId,
}: ReviewData) {
  return (
    <div>
      <div>{author}</div>
      <div>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <button>삭제</button>
      </div>
    </div>
  );
}
