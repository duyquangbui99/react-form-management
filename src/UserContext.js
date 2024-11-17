import React, { createContext, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        { id: 1, name: "Quang Bui", email: "qbui.example@gmail.com" },
        { id: 2, name: "Avanti Kantumuchu", email: "akantumuchu@example.com" },
    ]);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
