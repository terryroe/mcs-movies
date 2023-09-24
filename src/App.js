// Standard App component that imports data and passes it to the main MovieList
// component.
import MovieList from './components/MovieList';
import movieData from './data/movieData';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-4">MCS Movies</h1>
        </div>
        <div className="row row-gap-4">
          <MovieList movies={movieData} />
        </div>
      </div>
    </>
  );
}

export default App;
