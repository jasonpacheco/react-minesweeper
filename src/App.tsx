import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
// @ts-ignore
import { styleReset, Window, WindowHeader, WindowContent, Cutout } from 'react95';
// @ts-ignore
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Minefield } from '~/components/Minefield';
import { GameStateBar } from './components/GameStateBar';

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
    background-color: teal;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px 10px;
  box-sizing: border-box;
  .window {
    width: 100%;
    max-width: max-content;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <Wrapper>
          <Window className="window">
            <WindowHeader>
              <span>Minesweeper</span>
            </WindowHeader>
            <WindowContent>
              <GameStateBar />
              <Cutout>
                <Minefield />
              </Cutout>
            </WindowContent>
          </Window>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};
