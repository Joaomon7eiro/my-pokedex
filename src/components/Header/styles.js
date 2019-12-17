import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
  }

  strong {
    font-size: 30px;
    margin-left: 10px;
    color: #222;
  }
`;

export const MyPokedex = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  img {
    height: 30px;
    width: 30px;
  }

  span {
    margin-left: 5px;
    color: #222;
    font-weight: bold;
  }
`;
