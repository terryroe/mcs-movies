import { Fragment } from 'react';
import movies from '../data/movies';
import Movie from './Movie';

const MovieList = () => {
  return (
    <Fragment>
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Fragment>
  );
};

export default MovieList;
