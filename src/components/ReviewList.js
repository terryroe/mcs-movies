import ReviewForm from './ReviewForm';

const ReviewList = ({ reviews, addReview }) => {
  return (
    <>
      <ReviewForm addReview={addReview} />
      <hr />
      <strong>Reviews</strong>
      <hr />
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
          <div>No Reviews Yet</div>
          <hr />
        </>
      )}
    </>
  );
};

export default ReviewList;
