import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Playfair Display', serif;
    }
    html{
        scroll-behavior: smooth;
    }
`;

export default GlobalStyle;
