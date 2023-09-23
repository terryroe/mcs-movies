import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import reviewData from '../data/reviewData';

let nextId = 1000;

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    setReviews(reviewData.filter((review) => movie.id === review.movieId));
  }, [movie.id]);

  const addReview = (reviewData) => {
    const review = {
      id: nextId++,
      ...reviewData,
    };
    setReviews(reviews.concat(review));
  };

  return (
    <>
      <div className="card h-100">
        <h6 className="card-header text-center">{movie.Title}</h6>
        <div className="card-body">
          {!showReviews ? (
            <>
              <img
                className="w-100 mb-3"
                src={`/images/${movie.ImagePath}`}
                alt={movie.Title}
              />
              <p>{movie.Description}</p>
              <hr />
              <p>
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Director:</strong> {movie.Director}
              </p>
              <hr />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowReviews(true)}
              >
                Reviews
              </button>
            </>
          ) : (
            <>
              <ReviewList reviews={reviews} addReview={addReview} />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowReviews(false)}
              >
                Hide Reviews
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
