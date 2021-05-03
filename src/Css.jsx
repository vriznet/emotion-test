import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Css = () => {
  const color = 'darkgreen';

  const P = (props) => (
    <p
      css={{
        margin: 0,
        fontSize: 12,
        lineHeight: '1.5',
        fontFamily: 'Sans-Serif',
        color: 'black',
      }}
      {...props}
    />
  );

  const ArticleText = (props) => (
    <P
      css={{
        fontSize: 14,
        fontFamily: 'Georgia, serif',
        color: 'darkGray',
      }}
      {...props}
    />
  );

  const SmallArticleText = (props) => (
    <ArticleText
      css={{
        fontSize: 10,
      }}
      {...props}
    />
  );

  return (
    <>
      <h1>CSS</h1>
      <div
        id="container"
        css={css`
          margin-bottom: 30px;
        `}
      >
        <div
          css={{
            backgroundColor: 'hotpink',
            '&:hover': {
              color: 'lightgreen',
            },
          }}
        >
          This has a hotpink background, and has a lightgreen hovered color by
          using object style.
        </div>
        <div
          css={css`
            background-color: hotpink;
            &:hover {
              color: ${color};
            }
          `}
        >
          This has a hotpink background, and has a darkgreen hovered color by
          using js variable.
        </div>
        <SmallArticleText className="style-precedence">
          This is small article text for checking style precedence
        </SmallArticleText>
      </div>
    </>
  );
};

export default Css;
