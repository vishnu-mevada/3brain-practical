/* eslint-disable no-unused-vars */
import React from "react";
import { OurServices } from "../constant";

const Service = () => {
    return (
        <>
            {/* Services */}
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            Services
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <div className="row text-center">
                        {OurServices &&
                            OurServices.map((service) => (
                                <div className="col-md-4" key={service.id}>
                                    <span className="fa-stack fa-4x">
                                        <i className={service.icon1}></i>
                                        <i className={service.icon2}></i>
                                    </span>
                                    <h4 className="my-3">{service.title}</h4>
                                    <p className="text-muted">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;
