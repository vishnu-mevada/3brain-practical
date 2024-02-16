/* eslint-disable no-unused-vars */
import React from "react";
import { OurTeam, SocialIcons } from "../constant";

const Team = () => {
    return (
        <>
            {/* Team */}
            <section className="page-section bg-light" id="team">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            Our Amazing Team
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <div className="row">
                        {OurTeam &&
                            OurTeam.map((user) => (
                                <div className="col-lg-4" key={user.id}>
                                    <div className="team-member">
                                        <img
                                            className="mx-auto rounded-circle"
                                            src={user.image}
                                            alt="..."
                                        />
                                        <h4>{user.name}</h4>
                                        <p className="text-muted">
                                            {user.description}
                                        </p>
                                        <a
                                            className="btn btn-dark btn-social mx-2"
                                            href="#!"
                                            aria-label="Twitter"
                                        >
                                            <i
                                                className={SocialIcons.twitter}
                                            ></i>
                                        </a>
                                        <a
                                            className="btn btn-dark btn-social mx-2"
                                            href="#!"
                                            aria-label="Facebook"
                                        >
                                            <i
                                                className={SocialIcons.facebook}
                                            ></i>
                                        </a>
                                        <a
                                            className="btn btn-dark btn-social mx-2"
                                            href="#!"
                                            aria-label="LinkedIn"
                                        >
                                            <i
                                                className={SocialIcons.linkedIn}
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Aut eaque, laboriosam
                                veritatis, quos non quis ad perspiciatis, totam
                                corporis ea, alias ut unde.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
