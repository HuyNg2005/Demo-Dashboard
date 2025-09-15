import React from "react";
import {Link} from "react-router-dom";
import {Home, Users} from "lucide-react";

const Sidebar: React.FC = () => {
return (
    <aside className="w-64 h-screen bg-black text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Dashboard</h1>
        <nav className="space-y-4">
            <Link to="/">
                <Home/> Home
            </Link>
            <Link to="/customers" className="flex items-center gap-2 hover:text-gray-400">
                <Users /> Customers
            </Link>
        </nav>
    </aside>
);
};

export default Sidebar;