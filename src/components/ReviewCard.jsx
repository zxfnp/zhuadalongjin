import { renderStars } from "../utils/share";

export default function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <span className="review-author">{review.author}</span>
        <span className="review-stars">{renderStars(review.rating)}</span>
      </div>
      <p className="review-content">{review.content}</p>
      <span className="review-date">{review.date}</span>
    </div>
  );
}
