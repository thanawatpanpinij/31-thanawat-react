import React, { useContext, useEffect, useState } from "react";
import Buttons from "../components/Buttons";
import { UserDataContext } from "../context/UserDataContext";
import Table from "../components/Table";
import axios from "axios";

export default function Admin() {
    const [nameInput, setNameInput] = useState("");
    const [lastnameInput, setLastnameInput] = useState("");
    const [positionInput, setPositionInput] = useState("");
    const { userData, getUsers } = useContext(UserDataContext);

    async function createUser() {
        if (!nameInput || !lastnameInput || !positionInput) {
            alert("Please enter details");
            return;
        }

        const newUser = {
            name: nameInput,
            lastname: lastnameInput,
            position: positionInput,
        };
        await axios.post(`https://jsd5-mock-backend.onrender.com/members`, newUser);
        getUsers();
        setNameInput("");
        setLastnameInput("");
        setPositionInput("");
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h1 className="mb-12 text-center text-[3rem] font-bold">
                Generation Thailand
                <br />
                Home - Admin Sector
            </h1>
            <Buttons />
            <section className="w-fit mx-auto mb-22">
                <h2 className="mb-4 text-[1.25rem] font-semibold">Create User Here</h2>
                <div className="flex gap-[2.3rem]">
                    <input className="px-4 bg-white rounded shadow" type="text" placeholder="Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                    <input className="px-4 bg-white rounded shadow" type="text" placeholder="Last Name" value={lastnameInput} onChange={(e) => setLastnameInput(e.target.value)} />
                    <input className="px-4 bg-white rounded shadow" type="text" placeholder="Position" value={positionInput} onChange={(e) => setPositionInput(e.target.value)} />
                    <button className="cursor-pointer px-[0.9rem] py-[0.6rem] text-white bg-[#5E5BFF] rounded" onClick={createUser}>
                        Save
                    </button>
                </div>
            </section>
            <Table users={userData} input={{ nameInput, lastnameInput, positionInput }} />
        </>
    );
}
