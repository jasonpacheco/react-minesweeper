import { createGlobalStyle, ThemeProvider } from 'styled-components';
// @ts-ignore
import { styleReset, Window, WindowHeader, WindowContent, Cutout } from 'react95';
// @ts-ignore
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Minefield } from './Minefield';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Window>
          <WindowHeader>
            <span>Minesweeper</span>
          </WindowHeader>

          <WindowContent>
            <Cutout>
              <Minefield />
            </Cutout>
          </WindowContent>
        </Window>
      </ThemeProvider>
    </>
  );
};
