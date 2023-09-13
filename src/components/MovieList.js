import { Fragment } from 'react';
import movies from '../data/movies';
import Movie from './Movie';

const MovieList = () => {
  return (
    <Fragment>
      {movies.map((movie) => (
        <div className="col-3">
          <Movie movie={movie} />
        </div>
      ))}
    </Fragment>
  );
};

export default MovieList;
