import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Featured } from "./pages/featured";
import { Guests } from "./pages/guests";
import { WhatToDo } from "./pages/whatToDo";
import { Vendors } from "./pages/vendors";
import { Schedule } from "./pages/schedule";
import { Transportation } from "./pages/transportation";
import { Hotels } from "./pages/hotels";
import { ImportantDates } from "./pages/importantDates";
import { GuestForm } from "./pages/guestForm";
import { VendorForm } from "./pages/vendorForm";
import { AboutContact } from "./pages/aboutContact";
import { FAQ } from "./pages/FAQ";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Featured />} path="/featured" />
                        {/* <Route element={<Single />} path="/single/:theid" /> */}
                        <Route element={<Guests />} path="/guests" />
                        <Route element={<WhatToDo />} path="/what-to-do" />
                        <Route element={<Vendors />} path="/vendors" />
                        <Route element={<Schedule />} path="/schedule" />
                        <Route element={<Transportation />} path="/transportation" />
                        <Route element={<Hotels />} path="/hotels" />
                        <Route element={<ImportantDates />} path="/important-dates" />
                        <Route element={<GuestForm />} path="/guest-form" />
                        <Route element={<VendorForm />} path="/vendor-form" />
                        <Route element={<AboutContact />} path="/about-contact" />
                        <Route element={<FAQ />} path="/FAQ" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
