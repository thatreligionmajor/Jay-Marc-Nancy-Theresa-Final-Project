import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{/* need to convert anchor tags to link */}
			<nav className="navbar navbar-expand-lg bg-body-tertiary" id="primaryNav">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand" style={{ color: "black" }}>Worst Convention Ever-Con</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									People to See
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/featured" className="dropdown-item">Featured</Link></li>
									<li><Link to="/guests" className="dropdown-item">Guests</Link></li>
									{/* <li><a className="dropdown-item" href="#"></a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Things to Do
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/what-to-do" className="dropdown-item">What to do at Worst Convention Ever-Con</Link></li>
									<li><Link to="/schedule" className="dropdown-item">Schedule</Link></li>
									<li><Link to="/vendors" className="dropdown-item">Vendors</Link></li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Travel
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/transportation" className="dropdown-item">Transportation</Link></li>
									<li><Link to="/hotels" className="dropdown-item">Hotels</Link></li>
									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Resources
								</a>
								<ul className="dropdown-menu">
									<li><Link to="important-dates" className="dropdown-item">Important Dates</Link></li>
									{/* <li><a className="dropdown-item" href="#">Another action</a></li>
									<li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Participate
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/guest-form" className="dropdown-item" >Guests</Link></li>
									<li><Link to="/vendor-form" className="dropdown-item">Vendors</Link></li>
									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" style={{ color: "black" }} role="button" data-bs-toggle="dropdown" aria-expanded="false">
									About
								</a>
								<ul className="dropdown-menu">
									<li><Link to="/about-contact" className="dropdown-item">About/Contact Us</Link></li>
									<li><Link to="/FAQ" className="dropdown-item">FAQs</Link></li>
									{/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
								</ul>
							</li>
						</ul>
					</div>
					<div className="ml-auto">
						{!store.token ?
							<Link to="/">
								<button className="btn btn-primary">Return Home</button>
							</Link>
							:
							<Link to="/">
								<button onClick={() => actions.logout()} className="btn btn-primary">Logout</button>
							</Link>
						}
					</div>
				</div>
			</nav>
		</div>
	);
};
