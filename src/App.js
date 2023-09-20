import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-4">MCS Movies</h1>
        </div>
        <div className="row row-gap-4">
          <MovieList />
        </div>
      </div>
    </>
  );
}

export default App;
