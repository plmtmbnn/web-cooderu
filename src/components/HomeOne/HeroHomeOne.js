import React from 'react';
// import heroThumbOne from '../../assets/images/hero-thumb-1.png';
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
                                    Cooderu - Online Frontend & Backend Bootcamp <br />
                                </span>
                                <h1 className="appie-title">
                                    Telah dibuka pendaftaran <br />
                                    <span>
                                        <b>Batch 2</b>
                                    </span>{' '}
                                    <br />
                                </h1>
                                <h3>
                                    Kelas mulai{' '}
                                    <span
                                        style={{
                                            'text-decoration': 'underline',
                                            'text-decoration-color': '#a4d514',
                                            background: '#a4d514',
                                        }}
                                    >
                                        3 oktober 2022
                                    </span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>
                                    <div className="pricing-btn mt-35">
                                        <a
                                            className="main-btn"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSfgfJYG017I6B3n-vGlMGx3_fqx2OEooshqMQKGBBgHw23EzQ/viewform"
                                        >
                                            <b>Daftar Sekarang</b>
                                        </a>
                                    </div>
                                </span>
                                <br />
                                <h1 className="appie-title">
                                    <p>- Pilih Belajar Frontend atau Backend Selama 3 bulan</p>
                                    <p>- Jaminan kerja setelah lulus Bootcamp</p>
                                    <p>- Tersedia beasiswa gratis</p>
                                </h1>
                            </div>
                            {/* <img src={heroThumbOne} style={{ height: '20%' }} alt="" /> */}
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
