import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import Styled from './Styled.jsx';
import Css from './Css.jsx';
import Composition from './Composition.jsx';

const App = () => {
  return (
    <>
      <Css />
      <Styled />
      <Composition />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
