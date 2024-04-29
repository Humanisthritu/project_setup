import React from 'react';
import IncDec from './components/inc_dec';
import { useRoutes } from 'react-router';
import routes from './routes';


function App() {
  const routing = useRoutes(routes);


  return (
    <>
      {routing}
    </>
  );
}

export default App;
