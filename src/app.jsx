import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

import Styled from './Styled.jsx';
import Css from './Css.jsx';
import Composition from './Composition.jsx';
import ObjectStyle from './ObjectStyle.jsx';
import NestedSelector from './NestedSelector.jsx';

const App = () => {
  return (
    <>
      <Css />
      <Styled />
      <Composition />
      <ObjectStyle />
      <NestedSelector />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
