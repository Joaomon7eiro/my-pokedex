import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  #root {
    max-width: 1020px;
    min-width: 550px;
    margin: 0 auto;
  }

  html, body, #root{
    height: 100%;
  }

  body {
    background: #FAFAFA;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
