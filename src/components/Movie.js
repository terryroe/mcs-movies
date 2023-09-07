import { Fragment } from 'react';

const Movie = ({ movie }) => {
  return (
    <Fragment>
      <div className="card">
        <h2 className="card-header">{movie.Title}</h2>
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
