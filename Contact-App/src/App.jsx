import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ContactsPage from "./pages/ContactsPage";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/contacts" element={<ContactsPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
