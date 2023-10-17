import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/vendors.css";
// import { Vendor } from "../component/Vendor.js";
import data from "../../../../data.json";

export const Vendors = props => {
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getArtVendors();
        actions.getMerchVendors();
    },[])
    // const params = useParams();


    return (
        <div className="container">
            {/* jumbotron */}
            <div className="vendorJumbotron bg-light p-5 rounded-lg m-3">
                <img src="https://images.unsplash.com/photo-1600711847896-ea25db3164e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
                <div className="jumbotronContent">
                    <h1 className="display-4" id="vendorJumbotronTitle">Vendors</h1>
                    <p className="lead">Explore a Universe of Treasures</p>
                    <hr className="my-4"></hr>
                    <p>Welcome to the Vendor Hall of our Comic Book Convention! Prepare to embark on a thrilling journey through a galaxy of unique and captivating finds. Our carefully curated vendors offer a diverse array of treasures, from rare comic books and collectibles to one-of-a-kind art pieces and memorabilia.</p>
                </div>
            </div>
            {/* accordion for comic book vendors */}
            <div className="col-12 text-start mt-3">
            {/* div link header to open/close collapsable content */}
            <a type="button" className="container button-55 bgLightBlue borderYellow mt-3 vendorAccordionButton" data-bs-toggle="collapse" href="#comic-book-vendors-accordion-component" role="button" aria-expanded="false" aria-controls="comic-book-vendors-accordion-component">
                <div className="container text-start">
                    <div className="row">
                        <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                            Comics
                        </div>
                        <div className="col-3 text-end font-spidey-yellow">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                            </svg> */}
                            {/* replace with clickme and see how you feel */}
                        </div>
                    </div>
                </div>
            </a>
            {/* collapsable content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col aboutDropdownSpacer">                                    
                    </div>
                    <div className="m-0 p-0">
                        <div className="collapse mb-3" id="comic-book-vendors-accordion-component">
                            <div className="card vendor-card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                <ul className="list-group comicAccordionContent mt-2 font-spidey-darkBlue">
                                    {store.comicVendors.map((vendor, idx) =>
                                        <a key={idx} href={vendor.site_url} target="_blank">
                                            {vendor.name}
                                        </a>)
                                    }
                                </ul>     
                            </div>
                        </div>
                    </div>
                    <div className="col aboutDropdownSpacer">                                                                  
                    </div>
                </div>
            </div>
            {/* div link header to open/close collapsable content */}
            <a type="button" className="container button-55 bgLightBlue borderYellow mt-3 vendorAccordionButton" data-bs-toggle="collapse" href="#art-vendors-accordion-component" role="button" aria-expanded="false" aria-controls="art-vendors-accordion-component">
                <div className="container text-start">
                    <div className="row">
                        <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                            Art
                        </div>
                        <div className="col-3 text-end font-spidey-yellow">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                            </svg> */}
                        </div>
                    </div>
                </div>
            </a>
            {/* collapsable content */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col aboutDropdownSpacer">                                    
                    </div>
                    <div className="m-0 p-0">
                        <div className="collapse mb-3" id="art-vendors-accordion-component">
                            <div className="card vendor-card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                <ul className="list-group">
                                    {data.art_vendors.map((artVendor, index) =>
                                    <div className="font-spidey-darkBlue">
                                        <a key={index}>
                                            {artVendor.vendor_name}
                                        </a>
                                    </div>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col aboutDropdownSpacer">                                                                  
                    </div>
                </div>
            </div>
            {/* div link header to open/close collapsable content */}
            <a type="button" className="container button-55 bgLightBlue borderYellow mt-3 vendorAccordionButton" data-bs-toggle="collapse" href="#how-we-got-started-collapse-component" role="button" aria-expanded="false" aria-controls="how-we-got-started-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        Merch
                                    </div>
                                    {/* <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div> */}
                                </div>
                            </div>
                        </a>
            {/* collapsable content */}
            <div className="container-fluid">
                        <div className="row">
                            <div className="col aboutDropdownSpacer">                                    
                            </div>
                            <div className="m-0 p-0">
                                <div className="collapse mb-3" id="how-we-got-started-collapse-component">
                                    <div className="card vendor-card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                        <ul className="list-group">
                                            {data.merch_vendors.map((merchVendor, index) =>
                                                <a key={index}>
                                                    {merchVendor.vendor_name}
                                                </a>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col aboutDropdownSpacer">                                                                  
                            </div>
                        </div>
                    </div>
             </div>
        </div>
    );
}; 


// API to Use in Comic Vendors Accordion: https://comicvine.gamespot.com/api/documentation#toc-0-26



