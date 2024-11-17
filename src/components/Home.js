import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the User Management System <br /> <br /> Quang bui</h1>
            <Link to="/users">
                <button className="btn primary-btn">Go to User List</button>
            </Link>
        </div>
    );
};

export default Home;
