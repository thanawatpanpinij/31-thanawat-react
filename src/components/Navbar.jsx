import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <header className="bg-white">
            <nav className="flex justify-end gap-8 p-8 text-[1.25rem] font-bold border-b">
                <Link to="/">Home</Link>
                <Link to="/owner">Owner</Link>
            </nav>
        </header>
    );
}
