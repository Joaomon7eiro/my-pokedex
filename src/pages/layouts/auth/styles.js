import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    span {
      color: red;
      align-self: flex-start;
      font-weight: bold;
      margin: 0 0 10px;
    }
    button {
      margin: 5px 0 0;
      heigth: 44px;
      background: #31a9d8;
      font-weigth: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      padding: 10px;
      transition: background 0.3s;

      &:hover {
        background: #2191b7;
      }
    }

    a {
      text-decoration: none;
      color: #000;
      margin-top: 10px;
      font-size: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
