import { useEffect, useState } from "react";
import { UserDataContext } from "./userDataContext";
import axios from "axios";

export function UserDataProvider({ children }) {
    const [userData, setUserData] = useState([]);

    async function getUsers() {
        const usersApi = "https://jsd5-mock-backend.onrender.com/members";
        const usersData = await axios.get(usersApi);
        setUserData(usersData.data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return <UserDataContext.Provider value={{ userData, setUserData, getUsers }}>{children}</UserDataContext.Provider>;
}
