import React, { FC } from 'react';
import List from '../List';

// Styles
import { Wrapper, Title, Divider, ListsDiv } from './styles';

const Lists: FC = () => {
  return (
    <Wrapper>
      <ListsDiv>
        <Title>Lists</Title>
        <Divider />
        <List />
      </ListsDiv>
    </Wrapper>
  );
};

export default Lists;
