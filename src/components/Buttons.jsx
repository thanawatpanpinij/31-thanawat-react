import React from "react";
import { Link } from "react-router";

export default function Buttons() {
    return (
        <div className="flex justify-between max-w-[580px] mx-auto mb-23">
            <Link to="/users">
                <button className="cursor-pointer p-4 font-semibold bg-white rounded shadow">User Home Sector</button>
            </Link>
            <Link to="/admin">
                <button className="cursor-pointer p-4 font-semibold bg-white rounded shadow">Admin Home Sector</button>
            </Link>
        </div>
    );
}
