// A form to let the user add a new review.
import { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  // State for the text of the review and the star rating.
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(1);

  //
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Don't add blank reviews.
    if (review.length === 0) {
      alert('Please enter some text for the review.');
      return;
    }

    // Call the callback function with the new rating info.
    addReview({ review, rating });

    // Reset the form for the next review input.
    setReview('');
    setRating(1);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label className="form-label" htmlFor="review">
          Your Review
        </label>
        {/* Make this a controlled input by setting the value and handling changes. */}
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
            {/* Make this a controlled input by setting the value and handling changes. */}
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
