import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90px;
  background: #06beb6;
  background: -webkit-linear-gradient(to right, #48b1bf, #06beb6);
  background: linear-gradient(to right, #48b1bf, #06beb6);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    h1 {
      color: #fff;
      margin-left: 12px;
    }
  }

  h4 {
    margin-right: 12px;
    color: #fff;
  }
`;
