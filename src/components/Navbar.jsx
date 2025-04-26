import { NavLink } from 'react-router-dom';
import imageLogo from '../assets/management.png';
export default function Navbar(){

    return (
        <nav className="bg-sky-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center justify-between">
                <img className="h-11 w-auto object-contain mr-4 " src={imageLogo}/>
                <h1 className="font-bold text-xl hidden md:block">
                    Panel administrativo de control
                </h1>
            </div>
            <div className="space-x-4 flex items-center">
                <NavLink to="/Clientes" className="hover:backdrop-saturate-100 px-2 py-1 rounded hover:bg-sky-800 transition-colors">Clientes</NavLink>
                <NavLink to="/Proveedor" className="hover:backdrop-saturate-100 px-2 py-1 rounded hover:bg-sky-800 transition-colors">Proveedor</NavLink>
                <NavLink to="/Usuarios" className="hover:backdrop-saturate-100 px-2 py-1 rounded hover:bg-sky-800 transition-colors">Usuarios</NavLink>
                <NavLink to="/Logout" className="hover:backdrop-saturate-100 px-2 py-1 rounded hover:bg-rose-800 transition-colors">Logout</NavLink>
            </div>
        </nav>
    );
}