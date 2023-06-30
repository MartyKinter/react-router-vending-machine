import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from './components/VendingMachine';
import Soda from './components/Soda';
import Chips from './components/Chips';
import Chocolate from './components/Chocolate';


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={VendingMachine}>
      </Route>
      <Route exact path="/soda" Component={Soda}>
      </Route>
      <Route exact path="/chips" Component={Chips}>
      </Route>
      <Route exact path="/chocolate" Component={Chocolate}>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
