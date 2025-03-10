import { ReviewData } from "@/types";
import ReviewItemDeleteButton from "./review-item-delete-button";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <div>
      <div>{author}</div>
      <div>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <ReviewItemDeleteButton reviewId={id} movieId={movieId} />
      </div>
    </div>
  );
}
