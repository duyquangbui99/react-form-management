import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UserContext } from "../UserContext";

const AddUser = () => {
    const { users, setUsers } = useContext(UserContext);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email format").required("Email is required"),
        }),
        onSubmit: (values) => {
            const newUser = { id: Date.now(), ...values };
            setUsers([...users, newUser]);
            navigate("/users");
        },
    });

    return (
        <div className="form-container">
            <h1>Add User</h1>
            <form onSubmit={formik.handleSubmit} className="user-form">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    className="form-input"
                />
                {formik.errors.name && <p className="error-text">{formik.errors.name}</p>}
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="form-input"
                />
                {formik.errors.email && <p className="error-text">{formik.errors.email}</p>}
                <button type="submit" className="btn primary-btn">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
