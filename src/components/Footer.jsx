/* eslint-disable no-unused-vars */
import React from "react";
import { SocialIcons } from "../constant";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            {/* Footer */}
            <footer className="footer py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-start">
                            Copyright &copy; Your Website {currentYear}
                        </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a
                                className="btn btn-dark btn-social mx-2"
                                href="#!"
                                aria-label="Twitter"
                            >
                                <i className={SocialIcons.twitter}></i>
                            </a>
                            <a
                                className="btn btn-dark btn-social mx-2"
                                href="#!"
                                aria-label="Facebook"
                            >
                                <i className={SocialIcons.facebook}></i>
                            </a>
                            <a
                                className="btn btn-dark btn-social mx-2"
                                href="#!"
                                aria-label="LinkedIn"
                            >
                                <i className={SocialIcons.linkedIn}></i>
                            </a>
                        </div>
                        <div className="col-lg-4 text-lg-end">
                            <a
                                className="link-dark text-decoration-none me-3"
                                href="#!"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className="link-dark text-decoration-none"
                                href="#!"
                            >
                                Terms of Use
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
