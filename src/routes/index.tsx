import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Kanban } from "../pages/Kanban";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register /> } />
        <Route path="/kanban" element={<Kanban /> } />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
