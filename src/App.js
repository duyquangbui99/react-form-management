import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./UserContext";
import Home from "./components/Home";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";


function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />}>
            <Route path="edit/:id" element={<EditUser />} />
          </Route>
          <Route path="/users/add" element={<AddUser />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
