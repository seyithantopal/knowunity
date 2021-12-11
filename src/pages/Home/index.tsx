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
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
];

const Home: FC = () => {
  const [lists, setLists] = useState<ListType[]>(mockData);

  /**
   * Delete a task by id without mutating the state directly
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
