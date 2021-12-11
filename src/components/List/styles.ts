import styled from 'styled-components';
import { COLOR_LIST, COLOR_LIST_CHECKED } from '../../utils/constants/color';
import { CheckboxType } from '../../types/interfaces';


export const Wrapper = styled.div`
  // background-color: pink;
`
export const SingleList = styled.div<CheckboxType>`
  display: flex;
  flex-direction: row;
  align-items: center;

  .rightWrapper {
    width: 100%;
    font-family: ${(props) => props.isChecked ? 'Ubuntu-Italic' : 'Ubuntu-Regular'};
    font-size: 20px;
    color: ${(props) => props.isChecked ? COLOR_LIST_CHECKED : COLOR_LIST};
    margin-left: 8px;
    text-decoration: ${(props) => props.isChecked ? 'line-through' : ''};
    transition: all 500ms;
  };
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
`