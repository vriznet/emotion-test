import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

const Button = styled.button(
  {
    color: 'darkorchid'
  },
  props => ({
    fontSize: props.fontSize
  })
);

const hotpink = css({
  color: 'hotpink'
});

const hotpinkHoverOrFocus = css({
  '&:hover,&:focus': hotpink
});

const hotpinkWithBackground = css(
  {
    backgroundColor: 'black',
    color: 'green'
  },
  hotpink
);

const ObjectStyle = () => {
  return (
    <>
      <h1>Object Styles</h1>
      <div
        css={{
          color: 'darkorchid',
          backgroundColor: 'lightgray'
        }}
      >
        This is darkorchid styled by css prop object style.
      </div>
      <Button fontSize={16}>
        Darkorchid button styled by emotion styled has an object contains function passes props parameter.
      </Button>
      <div
        css={{
          color: 'darkorchid',
          '& .name': {
            color: 'orange'
          }
        }}
      >
        This is darkorchid,
        <span className="name">and this is child span, so color is orange styled by Child Selector.</span>
      </div>
      <div
        css={[
          { color: 'darkorchid' },
          { backgroundColor: 'hotpink' },
          { padding: 8 }
        ]}
      >
        This is darkorchid with a hotpink background 8px of padding styled by array object style.
      </div>
      <div
        css={{
          background: [
            'red',
            'linear-gradient(#e66465, #9198e5)'
          ],
          height: 100
        }}
      >
        This has a gradient background in browsers that support gradients and is red in browsers that don't support gradients
      </div>
      <p css={hotpink}>This is hotpink</p>
      <button css={hotpinkHoverOrFocus}>Hotpink Hover or Focus</button>
      <p css={hotpinkWithBackground}>
        This has a black background and is hotpink. Try moving where hotpink is in the css call and see if the color changes.
      </p>
    </>
  );
};

export default ObjectStyle;