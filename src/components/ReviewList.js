import ReviewForm from './ReviewForm';

const ReviewList = ({ reviews }) => {
  return (
    <>
      <ReviewForm reviews={reviews} />
      <hr />
      <div>Reviews</div>
      <hr />
      {reviews.map((review) => {
        return (
          <>
            <div>Review</div>
          </>
        );
      })}
    </>
  );
};

export default ReviewList;
