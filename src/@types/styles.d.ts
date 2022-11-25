// d.ts APENAS CODIGO DE DEFINICAO DE TiPES TYPESCRIPT

import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}