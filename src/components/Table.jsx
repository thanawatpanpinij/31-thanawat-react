import axios from "axios";
import React, { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

export default function Table({ users }) {
    const { userData, setUserData } = useContext(UserDataContext);
    const isAdminUrl = window.location.href.includes("admin");

    async function handleDelete(event, name, lastname, position) {
        const userId = event.target.dataset.id;

        if (confirm(`Do you want to delete user: name: ${name} lastname: ${lastname} position: ${position}?`)) {
            await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${userId}`);
            const newData = userData.filter(({ id }) => id !== userId);
            setUserData(newData);
        }
    }

    return (
        <table className="mx-auto text-center border border-my-gray rounded">
            <thead>
                <tr>
                    <th className="py-2 px-16 border border-my-gray rounded">Name</th>
                    <th className="py-2 px-16 border border-my-gray rounded">Last Name</th>
                    <th className="py-2 px-16 border border-my-gray rounded">Position</th>
                    {isAdminUrl && <td className="py-2 px-16 border border-my-gray rounded">Action</td>}
                </tr>
            </thead>
            <tbody>
                {users.map(({ id, name, lastname, position }) => (
                    <tr key={id} className="h-[41px] bg-white">
                        <td className="py-2 px-16 border border-my-gray rounded">{name}</td>
                        <td className="py-2 px-16 border border-my-gray rounded">{lastname}</td>
                        <td className="py-2 px-16 border border-my-gray rounded">{position}</td>
                        {isAdminUrl && (
                            <td className="py-2 px-16 border border-my-gray rounded">
                                <p className="cursor-pointer text-red-500 hover:underline" data-id={id} onClick={(event) => handleDelete(event, name, lastname, position)}>
                                    Delete
                                </p>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
