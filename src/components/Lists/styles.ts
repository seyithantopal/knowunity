import styled from 'styled-components';
import {
  COLOR_HR,
  COLOR_LISTS_GRADIENT_END,
  COLOR_LISTS_GRADIENT_START,
  COLOR_LIST_TITLE
} from '../../utils/constants/color';

export const Wrapper = styled.div`
  background: ${COLOR_LISTS_GRADIENT_START};
  background: -webkit-linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  background: linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  width: 400px;
  height: 500px;
  -webkit-border-radius: 40px;
  -moz-osx-border-radius: 40px;
`

export const Title = styled.h1`
  color: ${COLOR_LIST_TITLE};
`

export const Divider = styled.hr`
  border: 1px solid ${COLOR_HR};
  width: 80%;
  margin-left: 0;
  margin-top: 0;
`

export const ListsDiv = styled.div`
  padding: 0 25px 0 25px;
`