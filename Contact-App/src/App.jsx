import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUpPage />} />
  
        <Route path="/login" element={<LoginPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
