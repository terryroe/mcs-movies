import { Fragment } from 'react';

const Movie = ({ movie }) => {
  return (
    <Fragment>
      <div className="card h-100">
        <h5 className="card-header text-center">{movie.Title}</h5>
        <div className="card-body">
          <img
            className="w-100"
            src={`/images/${movie.ImagePath}`}
            alt={movie.Title}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Movie;
