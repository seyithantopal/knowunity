import React, { FC, useState, useEffect } from 'react';
import { ListType } from '../../types/interfaces';

import { Wrapper, SingleList, DeleteIcon } from './styles';

type Props = {
  list: ListType;
  onDelete: (id: number) => void;
};

const List: FC<Props> = ({ list, onDelete }) => {
  const { title, completed, id } = list;
  const [isChecked, setIsChecked] = useState<boolean>(completed);

  useEffect(() => {
    setIsChecked(completed);
  }, [onDelete, completed]);

  return (
    <Wrapper>
      <SingleList isChecked={isChecked}>
        <div className='leftWrapper'>
          <input checked={isChecked} type='checkbox' className='check' onChange={() => setIsChecked(!isChecked)} />
        </div>
        <div className='rightWrapper'>{title}</div>
        {isChecked && <DeleteIcon onClick={() => onDelete(id)} />}
      </SingleList>
    </Wrapper>
  );
};

export default List;
