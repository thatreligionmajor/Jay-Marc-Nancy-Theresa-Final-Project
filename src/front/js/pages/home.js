import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import stormtroopers from "../../img/stormtroopers.jpg";
import conlogo_transparent from "../../img/conlogo_transparent.png";
import CountdownTimer from "../component/countdownTimer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (

		<div className="text-center">
			<div className="wrapper" style={{ textAlign: "center" }}>
				<div className="row">
					<div className="col-5">
						<CountdownTimer />
					</div>
					<div className="col-6">
						<img src={conlogo_transparent} className="homeLogo" alt="banner" />
					</div>
					<div className="blurb-container my-3">
						<h2>Calling all factions. Calling all mana types.</h2>
						<h1>CALLING ALL NERDS</h1>
						<p>Feast your vision impaired looking spheres (and corrective lenses) on the greatest, most interactive, <strong><i>best smelling</i></strong> gathering of nerds and nerd-aligned anthropomorphic mortals that the <sup>*observable*</sup> universe has ever <i>and will ever</i> see.</p>
						<h5>
							<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FComic-Effect-Boom-PNG.png&f=1&nofb=1&ipt=12ff9f560d83cd8c3aa2a00134bf2227ab119be3dd0e1595be046b64c58acdf3&ipo=images" className="homeDescriptionComicSound" />
							Enjoy tabletop gaming?
							<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FComic-Effect-Boom-PNG.png&f=1&nofb=1&ipt=12ff9f560d83cd8c3aa2a00134bf2227ab119be3dd0e1595be046b64c58acdf3&ipo=images" className="homeDescriptionComicSound" />
						</h5>
						<h5>
							<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FExplosion-Boom-PNG-Download-Image.png&f=1&nofb=1&ipt=8afff38673b090ae451597f0a9dcc515ad3ebbf70fdfca399071c686044ec9e3&ipo=images" className="homeDescriptionComicSound" />
							Find comfort in reading comics in a musty, dimly lit coffee shop?
							<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FExplosion-Boom-PNG-Download-Image.png&f=1&nofb=1&ipt=8afff38673b090ae451597f0a9dcc515ad3ebbf70fdfca399071c686044ec9e3&ipo=images" className="homeDescriptionComicSound" />
						</h5>
						<h5>
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FComic-Boom-PNG-Clipart.png&f=1&nofb=1&ipt=3fef3bf534a7d09b41666fcb1ac7ab094f915c731ec762f7538bfee213e62fb1&ipo=images" className="homeDescriptionComicSound" />
							Are you at peace in a basement dwelling with unverified radon gas emissions?
							<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FComic-Boom-PNG-Clipart.png&f=1&nofb=1&ipt=3fef3bf534a7d09b41666fcb1ac7ab094f915c731ec762f7538bfee213e62fb1&ipo=images" className="homeDescriptionComicSound" />
						</h5><br />
						<h1><strong>The Worst Convention EverCon</strong></h1><br />
						<p>... consider us a demi-god level ascension, a digivolved version, a post-morphin time mechanical orientation, a levelled up skill-capped overpowered out-of-print mythic rare killer combo of an event. Consider us at the Worst Convention EverCon to be the best convention you and all your online friends have ever LARPed as extroverts in order to stepped out of the house to be a part of. We even brought the pizza rolls.</p>
						<h1>One convention to rule them all.</h1>
					</div>
					<div>
						<img src={stormtroopers} className="homeTroopers" alt="banner" />
						<div className="row">
							{/* <div className="col-4">
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
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
