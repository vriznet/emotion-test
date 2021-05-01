import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import isPropValid from '@emotion/is-prop-valid';

const Button = styled.button`
  color: ${(props) => (props.primary ? 'hotpink' : 'turquoise')};
`;

const WithButton = Button.withComponent('button');

const ParentOfButton = styled.div`
  ${Button} {
    color: green;
  }
`;

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

const H2 = styled(
  // tagName
  'h2',
  // shouldForwardProp을 프로퍼티로 갖는 object
  // 이 프로퍼티는 prop의 이름이 vaild한지를 확인하고 prop의 이름이 color인 경우에는 제외한다. (값이 아님)
  {
    shouldForwardProp: (prop) => isPropValid(prop) && prop !== 'color',
  } // styled(tagName, object)가 createStyled 내의 함수를 반환하므로 이 아래는 이 함수의 인수라고 할 수 있다.
  // H2에 color 애트리뷰트가 있을 경우에는 무시하여 아래의 hotpink를 적용하고, 나머지 애트리뷰트(bgc)는 적용한다.
)((props) => ({
  color: 'hotpink',
  backgroundColor: props.bgc,
}));

const dynamicStyle = (props) =>
  css`
    color: ${props.color};
  `;

const DynamicContainer = styled.div`
  ${dynamicStyle}
`;

const Nester = styled('span')`
  color: green;
  & > a {
    color: hotpink;
  }
`;

const Container = styled.div((props) => ({
  display: 'flex',
  flexDirection: props.column && 'column',
}));

const Styled = () => {
  return (
    <>
      <Container column>
        <Button>This is a regular button</Button>
        <Button primary>This is a primary button</Button>
        <WithButton primary>This is a with primary button</WithButton>
        <ParentOfButton>
          <Button>This is a child Button</Button>
        </ParentOfButton>
        <H1 color="lightgreen">This is object style lightgreen</H1>
        <H2 color="lightgreen" bgc="black">
          This is lightgreen
        </H2>
        <DynamicContainer color="blue">
          This is a dynamic container
        </DynamicContainer>
        <Button as="a" href="https://github.com" target="_blank">
          As Anchor Button
        </Button>
        <Nester>
          This is <a>nested</a>
        </Nester>
      </Container>
    </>
  );
};

export default Styled;
