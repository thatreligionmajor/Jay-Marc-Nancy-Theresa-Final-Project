import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



export const NewReleases = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getNewComics();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>New Releases</h1>
            <div className="row">
                {store.comics.map((item, index) => {
                    return (
                        <div className="col-md-3" key={index}>
                            <div className="card mb-3">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.publisher}</p>
                                    <p className="card-text">{item.date}</p>
                                    <p className="card-text">{item.price}</p>
                                    <a href="#" className="btn btn-primary">Add to Favorites</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}