import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
        @font-face {
        font-family: 'TTSupermolot-Regular';
        src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Regular.ttf') format('ttf');
    }

    @font-face {
        font-family: 'TTSupermolot-Bold';
        src: url('/src/Componentes/EstiloGlobal/Fontes/supermolot-ttf/TT-Supermolot-Bold.ttf');
    }

    @font-face {
        font-family: 'Roboto-Flex';
        src: url("/src/Componentes/EstiloGlobal/Fontes/roboto-ttf/robotoflex-Regular.ttf") format('ttf');
    }
    body, html {
        margin: 0;
        padding: 0;
    }
`

export default EstiloGlobal;