import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Clientes from "./pages/Clientes"
import Proveedor from "./pages/Proveedor"
import Usuarios from "./pages/Usuarios"
import Logout from "./pages/Logout";

function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/Clientes" element={<Clientes />} />
            <Route path="/Proveedor" element={<Proveedor />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="/Logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
