import React from 'react';
import IconOne from '../../assets/images/icon/1.png';
import IconTwo from '../../assets/images/icon/2.png';
import IconThree from '../../assets/images/icon/3.png';
import IconFour from '../../assets/images/icon/4.png';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="appie-section-title text-center">
                            <h3 className="appie-title">
                                Didesain dengan <br /> Kurikulum Terbaru.
                            </h3>
                            <p>Kami berusaha membantu untuk beradaptasi lebih cepat. </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="200ms"
                        >
                            <div className="icon">
                                <img src={IconOne} alt="" />
                                <span>1</span>
                            </div>
                            <h4 className="appie-title">Bootcamp Dengan Kurikulum Terbaru</h4>
                            <p>
                                Anda akan mempelajari keterampilan yang paling sering digunakan di
                                industri saat ini. Proses transfer ilmu dari instruktur kami yang
                                berpengalaman juga memudahkan Anda untuk belajar dengan cepat.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="400ms"
                        >
                            <div className="icon">
                                <img src={IconTwo} alt="" />
                                <span>2</span>
                            </div>
                            <h4 className="appie-title">Latihan & Portfolio</h4>
                            <p>
                                Anda akan belajar langsung melalui berbagai latihan, studi kasus &
                                proyek nyata dari mitra pilihan kami.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="600ms"
                        >
                            <div className="icon">
                                <img src={IconThree} alt="" />
                                <span>3</span>
                            </div>
                            <h4 className="appie-title">Career Coaching</h4>
                            <p>
                                Kami membantu meningkatkan kepercayaan diri Anda dengan membuat
                                resume yang menarik & memberikan tips & trik untuk memenangkan
                                wawancara.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                            data-wow-duration="2000ms"
                            data-wow-delay="800ms"
                        >
                            <div className="icon">
                                <img src={IconFour} alt="" />
                                <span>4</span>
                            </div>
                            <h4 className="appie-title">Hiring Partner</h4>
                            <p>
                                Kami membantu Anda mendapatkan peran yang Anda sukai dari magang
                                hingga pekerjaan penuh waktu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
