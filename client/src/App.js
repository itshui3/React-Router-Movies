import React, { useState } from 'react';
import {Route} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// import { prependOnceListener } from 'cluster';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <Route render={(props) => <SavedList {...props} list={savedList} />} />
      <Route exact path="/" component={MovieList}></Route>
      <Route exact path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
