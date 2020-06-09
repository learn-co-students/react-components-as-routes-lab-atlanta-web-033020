import React from 'react';
import { directors } from '../data';

const mapDirectors = () => directors.map(director =>
  <div>
    <h3>Name: {director.name}</h3>
    <p>Movies:</p>
    <ul>
      {director.movies.map(movie => <li>{movie}</li>)}
    </ul>
  </div>)

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {mapDirectors()}
    </div>
  );
}

export default Directors
