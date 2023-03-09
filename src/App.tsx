import React, { FC } from 'react';

import Router from "./config/router";
import {
  Header,
  Footer
} from "./layouts/index";

const App: FC = () => {

  return (
    <>
      <Header />
      <Router />
    </>
  );
}


export default App

