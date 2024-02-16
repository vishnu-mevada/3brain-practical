/* eslint-disable no-unused-vars */
import React from "react";
import { AboutUs } from "../constant";

const About = () => {
    return (
        <>
            {/* About */}
            <section className="page-section" id="about">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            About
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <ul className="timeline">
                        {AboutUs &&
                            AboutUs.map((about, index) => (
                                <li
                                    key={about.id}
                                    className={
                                        index % 2 ? "timeline-inverted" : ""
                                    }
                                >
                                    <div className="timeline-image">
                                        <img
                                            className="rounded-circle img-fluid"
                                            src={about.image}
                                            alt="..."
                                        />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>{about.year}</h4>
                                            <h4 className="subheading">
                                                {about.title}
                                            </h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                {about.description}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        <li className="timeline-inverted">
                            <div className="timeline-image">
                                <h4>
                                    Be Part
                                    <br />
                                    Of Our
                                    <br />
                                    Story!
                                </h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default About;
