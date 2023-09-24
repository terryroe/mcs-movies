// Show the list of reviews, including a form to add a new review.
import ReviewForm from './ReviewForm';

const ReviewList = ({ reviews, addReview }) => {
  return (
    <>
      {/* Show the review form for adding a new review and pass it the callback function for adding a new review. */}
      <ReviewForm addReview={addReview} />
      <hr />
      <strong>Reviews</strong>
      <hr />
      {/* If there are reviews, show them... */}
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <div key={review.id}>
              <div>{Array(review.rating).fill(' * ')}</div>
              <div>{review.review}</div>
              <hr />
            </div>
          );
        })
      ) : (
        <>
          {/* Otherwise, display a message that there are no reviews. */}
          <div>No Reviews Yet</div>
          <hr />
        </>
      )}
    </>
  );
};

export default ReviewList;
