import movies from '../data/movies';
import Movie from './Movie';

const MovieList = () => {
  return (
    <>
      {movies.map((movie) => (
        <div className="col-3">
          <Movie movie={movie} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
