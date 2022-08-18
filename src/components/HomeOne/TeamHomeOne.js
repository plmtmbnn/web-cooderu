import React from 'react';
import teamOne from '../../assets/images/team-1.jpg';
import teamTwo from '../../assets/images/team-2.jpg';
import teamThree from '../../assets/images/team-3.jpg';
import teamFour from '../../assets/images/team-4.jpg';
import teamFive from '../../assets/images/team-5.jpg';

function TeamHomeOne({ className }) {
    return (
        <>
            <section className={`appie-team-area pt-90 pb-100 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Team Members</h3>
                                <p hidden>Different layouts and styles for team sections.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img
                                        src={teamOne}
                                        alt=""
                                        style={{
                                            filter: 'grayscale(90%)',
                                        }}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Polma Tambunan</h5>
                                    <span>CO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img
                                        src={teamTwo}
                                        alt=""
                                        style={{
                                            filter: 'grayscale(90%)',
                                        }}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Aditya Siregar</h5>
                                    <span>CO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img
                                        src={teamThree}
                                        alt=""
                                        style={{
                                            filter: 'grayscale(90%)',
                                        }}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Adrian Benhard</h5>
                                    <span>CO-Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img
                                        src={teamFour}
                                        alt=""
                                        style={{
                                            filter: 'grayscale(90%)',
                                        }}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Herman Handoko</h5>
                                    <span>Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="appie-team-item mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="thumb">
                                    <img
                                        src={teamFive}
                                        alt=""
                                        style={{
                                            filter: 'grayscale(90%)',
                                        }}
                                    />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-center">
                                    <h5 className="title">Ichwan Peryana</h5>
                                    <span>Advisor</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12" hidden>
                            <div className="team-btn text-center mt-50">
                                <a className="main-btn" href="#">
                                    {' '}
                                    View all Members <i className="fal fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
