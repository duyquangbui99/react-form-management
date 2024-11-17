import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../UserContext";

const UserList = () => {
    const { users, setUsers } = useContext(UserContext);

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="user-list-container">
            <h1>User List</h1>
            <Link to="/users/add">
                <button className="btn primary-btn">Add User</button>
            </Link>
            <ul className="user-list">
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <div className="user-info">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                        <div className="user-actions">
                            <Link to={`edit/${user.id}`}>
                                <button className="btn primary-btn">Edit</button>
                            </Link>
                            <button className="btn danger-btn" onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    );
};

export default UserList;
