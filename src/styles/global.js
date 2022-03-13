import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --color-black: #222;
        --color-white: #FFF;
        --color-white-50: #F0F0F0;
        --color-gray: #D0D0D0;
        --color-purple: #8684FC;
        --color-blue: #3D50B3;
        --color-red: #F00;
    }

    body {
        background-color: var(--color-white-50);
        color: var(--color-black);
        min-width: 100vw;
        min-height: 100vh;
    }

    body, input, button {
        font-family: 'Inter', Helvetica, sans-serif;
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }
`;