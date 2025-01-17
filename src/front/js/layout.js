import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";

import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import { Vendors } from "./pages/vendors";
import { Featured } from "./pages/featured";
import { Guests } from "./pages/guests";
import { WhatToDo } from "./pages/whatToDo";
import { Schedule } from "./pages/schedule";
import { Transportation } from "./pages/transportation";
import { Hotels } from "./pages/hotels";
import { ImportantDates } from "./pages/importantDates";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Private } from "./pages/private";
import { AboutContact } from "./pages/aboutContact";
import { FAQ } from "./pages/FAQ";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ForgotPassword } from "./pages/forgotPassword";
import { PasswordReset } from "./pages/passwordReset";
import { NewReleases } from "./pages/newReleases";
import { NerdFact } from "./pages/nerdFact";
import { ContactUs } from "./component/contactUs";

import "../styles/layout.css";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <div className="routesStyling">
                        <Routes>
                            <Route element={<Home />} path="/" />
                            <Route element={<Vendors />} path="/vendors" />
                            <Route element={<Featured />} path="/featured" />
                            <Route element={<Guests />} path="/guests" />
                            <Route element={<NewReleases />} path="/new-releases" />
                            <Route element={<NerdFact />} path="/nerd-fact" />
                            <Route element={<WhatToDo />} path="/what-to-do" />
                            <Route element={<Schedule />} path="/schedule" />
                            <Route element={<Transportation />} path="/transportation" />
                            <Route element={<Hotels />} path="/hotels" />
                            <Route element={<ImportantDates />} path="/important-dates" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<Login />} path="/login" />
                            <Route element={<Private />} path="/private" />
                            <Route element={<ForgotPassword />} path="/forgot-password" />
                            <Route element={<PasswordReset />} path="/reset-password" />
                            <Route element={<AboutContact />} path="/about-contact" />
                            <Route element={<FAQ />} path="/FAQ" />
                            <Route element={<ContactUs />} path="/contact-us" />
                            <Route element={<h1>Not found!</h1>} />                        
                        </Routes>
                    </div>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);