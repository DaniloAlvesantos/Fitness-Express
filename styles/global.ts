import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background:rgb(241, 240, 238);
        font-size:14px;
        font-family: sans-serif;
    }
    html{
      scroll-behavior: smooth;
    }

    body {
      width: 100vw;
      height: 100%;
    }
    body::-webkit-scrollbar {
      display: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

`;

export default GlobalStyle;
