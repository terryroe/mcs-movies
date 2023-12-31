// Map over all the movies returning a Movie component for each.
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="col-md-6">
          <Movie movie={movie} />
        </div>
      ))}
    </>
  );
};

export default MovieList;
