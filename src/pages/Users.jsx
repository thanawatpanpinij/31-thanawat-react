import React, { useContext, useEffect } from "react";
import Buttons from "../components/Buttons";
import Table from "../components/Table";
import { UserDataContext } from "../context/UserDataContext";

export default function Users() {
    const { userData, getUsers } = useContext(UserDataContext);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1 className="mb-12 text-center text-[3rem] font-bold">
                Generation Thailand
                <br />
                Home - User Sector
            </h1>
            <Buttons />
            <Table users={userData} />
        </>
    );
}
