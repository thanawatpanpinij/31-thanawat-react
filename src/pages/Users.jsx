import React, { useContext } from "react";
import Buttons from "../components/Buttons";
import Table from "../components/Table";
import { UserDataContext } from "../context/userDataContext";

export default function Users() {
    const { userData } = useContext(UserDataContext);

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
