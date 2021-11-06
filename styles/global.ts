import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background: ${(props) => props.theme.colors.background};
        font-size:14px;
        color:${(props) => props.theme.colors.text};
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
