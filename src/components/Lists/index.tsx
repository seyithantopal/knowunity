import React, { FC } from 'react';
import { ListType } from '../../types/interfaces';
import List from '../List';

// Styles
import { Wrapper, Title, Divider, ListsDiv } from './styles';

type Props = {
  lists: ListType[];
  onDelete: (id: number) => void;
};

const Lists: FC<Props> = ({ lists, onDelete }) => {
  return (
    <Wrapper>
      <ListsDiv>
        <Title>Lists</Title>
        <Divider />
        {lists.map((e, i) => {
          return (
            <List list={e} onDelete={onDelete} />
          );
        })}
      </ListsDiv>
    </Wrapper>
  );
};

export default Lists;
