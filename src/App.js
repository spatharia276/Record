import React from 'react';
import Home from './components/Basics/Home';
import SignIn from './components/Basics/SignIn';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="signin" element={<SignIn />} />
                  </Route>
              </Routes>
        </BrowserRouter>
  );
}
export default App;