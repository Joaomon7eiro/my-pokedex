import styled, { keyframes } from 'styled-components';

export const PokemonList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  a {
    background: #43c0f2;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    margin-top: auto;
    overflow: hidden;
    transition: background 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      background: #31a9d8;
    }

    div {
      display: flex;
      align-items: center;
      padding: 8px;
      margin-right: 4px;
      width: 30px;
      background: rgba(0, 0, 0, 0.1);
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      margin-right: 30px;
    }

    img {
      height: 15px;
      width: 15px;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      align-self: center;
      font-size: 16px;
      line-height: 20px;
      margin: 10px 0;
      color: #222;
    }

    > strong span {
      color: #555;
    }
  }
`;

export const LoadButton = styled.button`
  background: #43c0f2;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  transition: background 0.2s;
  padding: 10px;
  width: 30%;

  align-self: center;

  &:hover {
    background: #31a9d8;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  > div {
    align-self: center;
    margin-top: 20px;
  }

  > div svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
