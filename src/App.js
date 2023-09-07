import { Fragment } from 'react';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <h1 className="row justify-content-center my-4">MCS Movies</h1>
        <MovieList />
      </div>
    </Fragment>
  );
}

export default App;
