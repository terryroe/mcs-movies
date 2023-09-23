import { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    addReview({ review, rating });
    setReview('');
    setRating(0);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label className="form-label" htmlFor="review">
          Your Review
        </label>
        <input
          className="form-control mb-3"
          id="review"
          type="text"
          placeholder="Enter your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <div className="row">
          <div className="col-6">
            <label className="form-label" htmlFor="rating">
              Rating (stars)
            </label>
            <input
              className="form-control mb-3"
              id="rating"
              type="number"
              min={1}
              max={5}
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
            />
          </div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <button className="btn btn-primary">Add Review</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ReviewForm;
