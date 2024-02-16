/* eslint-disable no-unused-vars */
import React from "react";
import { PortfolioModel } from "../components/index";
import { PortfolioData } from "../constant";

const Portfolio = () => {
    return (
        <>
            {/* Portfolio Grid */}
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            Portfolio
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>
                    <div className="row">
                        {/* Portfolio items */}
                        {PortfolioData &&
                            PortfolioData.map((portfolio) => (
                                <div
                                    className="col-lg-4 col-sm-6 mb-4"
                                    key={portfolio.id}
                                >
                                    <div className="portfolio-item">
                                        <a
                                            className="portfolio-link"
                                            data-bs-toggle="modal"
                                            href={portfolio.portfolioLink}
                                        >
                                            <div className="portfolio-hover">
                                                <div className="portfolio-hover-content">
                                                    <i className="fas fa-plus fa-3x"></i>
                                                </div>
                                            </div>
                                            <img
                                                className="img-fluid"
                                                src={portfolio.image}
                                                alt="..."
                                            />
                                        </a>
                                        <div className="portfolio-caption">
                                            <div className="portfolio-caption-heading">
                                                {portfolio.title}
                                            </div>
                                            <div className="portfolio-caption-subheading text-muted">
                                                {portfolio.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <PortfolioModel />
            </section>
        </>
    );
};

export default Portfolio;
