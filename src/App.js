import React from 'react';
import propTypes from 'prop-types'

function Food({ favourite }) {
  return <h3>I love { favourite }</h3>
}

const foodILike = []

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
