import { useRoutes } from 'react-router';
import routes from './routes';
import { ColorModeContext, useMode } from './theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import { CssBaseline, ThemeProvider } from '@mui/material';


function App() {
  const routing = useRoutes(routes);
  const [theme, colorMode] = useMode()

  return (
    <>
        <Provider store={store}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {routing}
            </ThemeProvider>
          </ColorModeContext.Provider>
        </Provider>
    </>
  );
}

export default App;
