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
        {/*<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">*/}
        {/*    <h1 className="text-4xl font-bold text-blue-600">¡Tailwind está funcionando!</h1>*/}
        {/*</div>*/}
    </BrowserRouter>
  )
}

export default App
