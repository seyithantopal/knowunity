import styled from 'styled-components';
import {
  COLOR_HR,
  COLOR_LISTS_GRADIENT_END,
  COLOR_LISTS_GRADIENT_START,
  COLOR_LIST_TITLE,
  COLOR_PLUS_SIGN_BACKGROUND,
  COLOR_PLUS_SIGN_TEXT
} from '../../utils/constants/color';

export const Wrapper = styled.div`
  background: ${COLOR_LISTS_GRADIENT_START};
  background: -webkit-linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  background: linear-gradient(to right, ${COLOR_LISTS_GRADIENT_START}, ${COLOR_LISTS_GRADIENT_END});
  width: 400px;
  height: 500px;
  -webkit-border-radius: 40px;
  -moz-osx-border-radius: 40px;
  position: relative;
  overflow: hidden;


  .plusSign {
    background-color: #38e0ef;
    width: 60px;
    height: 60px;
    position: absolute;
    -webkit-border-radius: 50%;
    bottom: 25px;
    right: 25px;
    font-size: 32px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  };
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
  height: 100%;
  -webkit-mask-image: -webkit-gradient(linear, left 50%, left bottom, from(black), to(rgba(0, 0, 0, 0)));
`

export const PlusSign = styled.div`
  background-color: ${COLOR_PLUS_SIGN_BACKGROUND};
  width: 65px;
  height: 65px;
  position: absolute;
  -webkit-border-radius: 50%;
  bottom: 25px;
  right: 25px;
  font-size: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:after {
    content: '+';
    color: ${COLOR_PLUS_SIGN_TEXT};
  };
`