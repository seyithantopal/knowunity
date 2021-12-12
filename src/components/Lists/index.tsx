import React, { FC, useState } from 'react';
import { ListType } from '../../types/interfaces';
import List from '../List';
import Modal from '../Modal';

// Styles
import { Wrapper, Title, Divider, ListsDiv, PlusSign } from './styles';

type Props = {
  lists: ListType[];
  onDelete: (id: number) => void;
  onAdd: (title: string) => void;
};

const Lists: FC<Props> = ({ lists, onDelete, onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleAddList = (title: string) => {
    onAdd(title);
  };
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
      <PlusSign onClick={() => handleOpenModal()} />
      {isModalOpen && <Modal onSave={handleAddList} onClose={handleCloseModal} />}
    </Wrapper>
  );
};

export default Lists;
