import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    const navigate = useNavigate()
    function submitRequest() {
        actions.getUserAdded(firstName, lastName, email, password)
    }

    useEffect(() => {
        if (store.message != null && store.message != '') {
            setError(store.message)
        }
    }, [store.message])

    return (
        <div className="text-center mt-5" id="signupContainer">
            <h1 className="my-3">Create an Account</h1>
            <div className="mb-3 row">
                <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="controlled-input"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name:</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="controlled-input"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label>
                <div className="col-sm-10">
                    <input
                        type="email"
                        className="controlled-input"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="controlled-input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row">
                {/* <label htmlFor="confirmPassword" className="col-sm-2 col-form-label">Confirm Password:</label>
                <div className="col-sm-10">
                    <input
                        type="password"
                        className="controlled-input"
                        id="confirmPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div> */}
                <Link to="/login">
                    <button onClick={submitRequest}>Submit</button>
                </Link>
                <div>
                    {error != null && error}
                    {error != null && <Link to="/login">Login</Link>}
                </div>

            </div>
        </div>
    );
};

