import { Fragment } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-4">MCS Movies</h1>
        </div>
        <div className="row row-gap-4">
          <MovieList />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
