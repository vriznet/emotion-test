import React from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  color: ${props => props.primary ? 'hotpink' : 'turquoise'};
`;

const WithButton = Button.withComponent('button');

const ParentOfButton = styled.div`
  ${Button} {
    color: green;
  }
`;

const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
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
      </Container>
    </>
  )
};

export default Styled;