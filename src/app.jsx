import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import Styled from './Styled.jsx';
import Css from './Css.jsx';

const App = () => {
  return (
    <>
      <Css />
      <Styled />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
