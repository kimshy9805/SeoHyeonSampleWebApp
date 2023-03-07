import React, { FC } from 'react';
import { RouterProvider } from '../node_modules/react-router-dom/dist/index';

import Router from "./config/router";
import {
  Header,
  Footer
} from "./layouts/index";

const App: FC = () => {

  return (
    <>
      <Header />
      <RouterProvider router={ Router }>
        <Router />
        <Footer />
      </RouterProvider>
    </>
  );
}


export default App

