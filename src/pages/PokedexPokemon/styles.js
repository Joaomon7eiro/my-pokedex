import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  margin-right: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.2);

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;

  justify-content: space-around;
  flex: 1.5;
  background: #30a7d7;
  color: #fff;
  border-radius: 10px;

  h1 {
    align-self: center;
  }
  h1 span {
    color: #ddd;
  }
`;
export const Card = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background: #4bc2f2;
  min-height: 150px;
  border-radius: 8px;
  margin: 5px;
  justify-content: space-between;
  padding: 20px 0px;
  color: #fff;

  h2 {
    padding: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
  }

  > div span {
    font-weight: normal;
    margin-left: 5px;
  }
`;
export const CardMove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #30a7d7;
  border-radius: 8px;
  margin-top: 30px;
  padding: 20px;
  color: #fff;
`;

export const TypesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  list-style: none;
  padding: 10px;
`;

export const MovesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  list-style: none;
  color: #fff;
  padding: 10px;

  li {
    background: #44d657;
    padding: 10px;
    border-radius: 6px;
    margin: 5px;
    text-align: center;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Span = styled.span`
  padding: 10px;
  background: #da471b;
  border: 0;
  color: #fff;
  border-radius: 4px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const myCSS = css`
  background: ${({ color }) => color};
  padding: 10px;
  border-radius: 6px;
  margin: 5px;
`;

export const TypeLi = styled.li`
  ${myCSS};
`;
