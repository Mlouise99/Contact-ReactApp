import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import ContactsPage from "./pages/ContactsPage"
import Update from "./pages/Update";
import UserDetail from "./pages/UserDetail"
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/update" element={<Update />} />
      <Route path="/details" element={<UserDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
