const Movie = ({ movie }) => {
  return (
    <>
      <div className="card h-100">
        <h6 className="card-header text-center">{movie.Title}</h6>
        <div className="card-body">
          <img
            className="w-100 mb-2"
            src={`/images/${movie.ImagePath}`}
            alt={movie.Title}
          />
          <p>{movie.Description}</p>
          <hr />
          <p>Genre: {movie.Genre}</p>
          <p>Director: {movie.Director}</p>
          <hr />
          <button type="button" className="btn btn-primary">
            Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default Movie;
