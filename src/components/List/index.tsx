import React, { FC, useState } from 'react';

import { Wrapper, SingleList, Checkbox } from './styles';

const List: FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Wrapper>
      <SingleList isChecked={isChecked}>
        <div className='leftWrapper'>
          <Checkbox onChange={() => setIsChecked(!isChecked)} />
        </div>
        <div className='rightWrapper'>Task 1</div>
      </SingleList>
    </Wrapper>
  );
};

export default List;
