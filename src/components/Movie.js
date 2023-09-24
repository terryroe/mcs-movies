// All the functionality for displaying a Movie and its associated reviews.
import { useEffect, useState } from 'react';
import ReviewList from './ReviewList';
import reviewData from '../data/reviewData';

// Keep track of IDs for reviews that are added and increment the nextId for
// each new review.
let nextId = 1000;

const Movie = ({ movie }) => {
  // State to hold/update reviews.
  const [reviews, setReviews] = useState([]);
  // Whether to show/hide the review panel.
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    // Only use the reviews associated with this movie.
    setReviews(reviewData.filter((review) => movie.id === review.movieId));
  }, [movie.id]);

  // Callback function to add a new review, with reviewData to include:
  // review, rating.
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
          {/* Show the movie details if we're not viewing reviews. */}
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
              {/* Show the reviews for the movie and pass in a callback function to add a review. */}
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
