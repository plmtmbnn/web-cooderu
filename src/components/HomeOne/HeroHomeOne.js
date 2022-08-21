import React from 'react';
import heroThumbOne from '../../assets/images/hero-thumb-1.png';
import shapeTwo from '../../assets/images/shape/shape-2.png';
import shapeThree from '../../assets/images/shape/shape-3.png';
import shapeFour from '../../assets/images/shape/shape-4.png';

function HeroHomeOne({ className }) {
    return (
        <>
            <section className={`appie-hero-area ${className || ''}`}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>
                                    Cooderu - Online Frontend & Backend Bootcamp <hr />
                                </span>
                                <h1 className="appie-title">
                                    Telah dibuka pendaftaran <br />
                                    <span style={{ color: '#a4d514' }}>Batch 2</span> <br />
                                </h1>
                                <h3>
                                    Sampai{' '}
                                    <span
                                        style={{
                                            'text-decoration': 'underline',
                                            'text-decoration-color': '#a4d514',
                                            background: '#a4d514',
                                        }}
                                    >
                                        26 Sept 2022
                                    </span>
                                </h3>{' '}
                                <hr />
                                <p></p>
                                <ul hidden>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" /> Download for iOS
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" /> Download for
                                            Android
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={heroThumbOne} style={{ height: '20%' }} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
