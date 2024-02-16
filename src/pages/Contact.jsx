/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
    };

    return (
        <>
            {/* Contact */}
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">
                            Contact Us
                        </h2>
                        <h3 className="section-subheading text-muted">
                            Lorem ipsum dolor sit amet consectetur.
                        </h3>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} id="contactForm">
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    {/* Name input */}
                                    <input
                                        className="form-control"
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name *"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    {errors.name &&
                                        errors.name.type === "required" && (
                                            <div className="invalid-feedback">
                                                Name is required.
                                            </div>
                                        )}
                                </div>
                                <div className="form-group">
                                    {/* Email address input */}
                                    <input
                                        className="form-control"
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email *"
                                        {...register("email", {
                                            required: true,
                                            pattern:
                                                /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        })}
                                    />
                                    {errors.email &&
                                        errors.email.type === "required" && (
                                            <div className="invalid-feedback">
                                                Email is required.
                                            </div>
                                        )}
                                    {errors.email &&
                                        errors.email.type === "pattern" && (
                                            <div className="invalid-feedback">
                                                Email is not valid.
                                            </div>
                                        )}
                                </div>
                                <div className="form-group">
                                    {/* Phone number input */}
                                    <input
                                        className="form-control"
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        placeholder="Your Phone *"
                                        {...register("phone", {
                                            required: true,
                                        })}
                                    />
                                    {errors.phone &&
                                        errors.phone.type === "required" && (
                                            <div className="invalid-feedback">
                                                A phone number is required.
                                            </div>
                                        )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    {/* Message input */}
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Your Message *"
                                        {...register("message", {
                                            required: true,
                                        })}
                                    ></textarea>
                                    {errors.message &&
                                        errors.message.type === "required" && (
                                            <div className="invalid-feedback">
                                                A message is required.
                                            </div>
                                        )}
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                className="btn btn-primary btn-xl text-uppercase"
                                id="submitButton"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Contact;
