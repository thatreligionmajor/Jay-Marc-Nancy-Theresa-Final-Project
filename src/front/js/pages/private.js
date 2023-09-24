import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token !== "" && store.token !== undefined ?
            navigate("/private")

            : navigate("/login"));

    }, [store.token]);

    return (
        <div className="text-center mt-5">
            <h1>Welcome to the exclusive private page!</h1>
            <h2>Only authorized users can see this area!</h2>
            <h3>Lucky you!</h3>
        </div>
    )
}
