import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #373b44, #4286f4); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #373b44, #4286f4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 400px;
  height: 500px;
  -webkit-border-radius: 40px;
  -moz-osx-border-radius: 40px;
  padding: 10px;
`

export const Title = styled.h1`
  color: #fff;
  margin-left: 25px;
`

export const Divider = styled.hr`
  border: 1px solid #8c97bd;
  width: 80%;
  margin-left: 25px;
  margin-top: 0;
`