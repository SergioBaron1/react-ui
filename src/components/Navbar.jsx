import { NavLink } from 'react-router-dom';

export default function Navbar(){

    return (
        <nav className="bg-sky-900 p-4 text-white flex items-center justify-between">
            <div className="font-bold text-xl">
                Panel administrativo de control
            </div>
            <div className="space-x-4">
                <NavLink to="/Clientes" className="hover:underline">Clientes</NavLink>
                <NavLink to="/Proveedor" className="hover:underline">Proveedor</NavLink>
                <NavLink to="/Usuarios" className="hover:underline">Usuarios</NavLink>
                <NavLink to="/Logout" className="hover:underline">Logout</NavLink>
            </div>
        </nav>
    );
}