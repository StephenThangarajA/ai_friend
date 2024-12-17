import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Chat from "./Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;