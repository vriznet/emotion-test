import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Composition = () => {
  const danger = css`
    color: red;
  `;
  const base = css`
    color: turquoise;
  `;
  return (
    <>
      <div css={[danger, base]}>
        This is [danger, base], so color is turquoise.
      </div>
      <div css={[base, danger]}>This is [base, danger], so color is red.</div>
    </>
  );
};

export default Composition;
