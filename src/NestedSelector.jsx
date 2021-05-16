import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';



const paragraph = css`
  color: turquoise;
  
  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
`;

const nestedParagraph = css`
  color: turquoise;
  
  header & {
    color: green;
  }
`;

const NestedSelector = () => {
  return (
    <>
      <h1>Nested Selectors</h1>
      <p css={paragraph}>
        Some Text.&nbsp;
        <a>A link with bottom border styled by nested selector.</a>
      </p>
      <header>
        <p css={nestedParagraph}>
          This is green since it's inside a header
        </p>
      </header>
      <p css={nestedParagraph}>
        This is turquoise since it's not inside a header.
      </p>
    </>
  );
};

export default NestedSelector;