import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;

  div {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;

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

  span {
    margin-left: 5px;
    color: #222;
    font-weight: bold;
  }
  }
`;

export const Profile = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    border-left: 1px solid #ddd;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  img {
    height: 60px;
    border-radius: 50%;
  }
`;

export const Button = styled.button`
  border: 0;
  background: transparent;
`;
