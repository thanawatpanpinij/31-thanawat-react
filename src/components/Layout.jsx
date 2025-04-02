import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen px-8 py-16 bg-[#E8E8E8]">
                <Outlet />
            </main>
        </>
    );
}
