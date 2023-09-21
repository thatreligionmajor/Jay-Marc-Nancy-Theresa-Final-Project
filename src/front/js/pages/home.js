import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import stormtroopers from "../../img/stormtroopers.jpg";
import conlogo from "../../img/con-logo.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="wrapper" style={{ textAlign: "center" }}>
			<div className="container-fluid banner">
				<img src={conlogo} className="homeImage" alt="banner" />


			</div>
			<div className="countdown-timer my-3">102 Days 15 Hours 26 Minutes</div>
			<div>
				<img src={stormtroopers} className="homeImage" alt="banner" />
				<button className="btn btn-light mx-3">
					<Link to="/guest-form"></Link>
					Purchase Tickets!
				</button>
				<button className="btn btn-light mx-3">
					<Link to="/transportation"></Link>
					Plan Your Trip!</button>
				<button className="btn btn-light mx-3">
					<Link to="/guest-form"></Link>
					Join the Mailing List!</button>
			</div>
			<div className="blurb-container my-3">
				About the Convention blurb lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
				accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo
				duiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
				eleifend gravida, nulla nunc varius lectus, nec rutrum justo duiLorem ipsum dolor sit.
			</div>


		</div>
	);
};
