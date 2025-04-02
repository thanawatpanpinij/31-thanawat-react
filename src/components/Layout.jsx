import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="my-16">
                <Outlet />
            </main>
        </>
    );
}
