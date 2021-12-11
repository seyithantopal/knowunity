import React, { FC, useState } from 'react';

// Styles
import { Wrapper } from './styles';

// Components
import Lists from '../../components/Lists';
import { ListType } from '../../types/interfaces';

const mockData : ListType[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
];

const Home: FC = () => {
  const [lists, setLists] = useState<ListType[]>(mockData);

  /**
   * Delete a task without mutating the state directly
   * @param {number} id
   * @returns {void}
   */
  const handleDelete = (id: number): void => {
    const newList = lists.filter(list => list.id !== id);
    setLists(newList);
  };
  return (
    <Wrapper>
      <Lists lists={lists} onDelete={handleDelete} />
    </Wrapper>
  );
};

export default Home;
