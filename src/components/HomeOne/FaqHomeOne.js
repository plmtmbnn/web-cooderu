import React, { useState } from 'react';

function FaqHomeOne({ className }) {
    const [showQues, setQues] = useState(1);
    const openQuestion = (value) => {
        setQues(value);
    };
    return (
        <div id="faq-page">
            <section className={`appie-faq-area pb-95 ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">FAQ</h3>
                                <p>
                                    Untuk informasi lebih lanjut, hubungi kami dengan mengklik
                                    tombol Whatsapp.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(1)}
                                        className={`accrodion ${showQues === 1 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Apakah bootcamp ini berbayar?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 1 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Betul sebesar Rp 7.000.000 (enam juta
                                                        rupiah). Saat ini baru tersedia metode bayar
                                                        lunas ya.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(2)}
                                        className={`accrodion ${showQues === 2 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>
                                                    Berapa lama waktu belajar 1 periode bootcamp
                                                    sampai selesai?
                                                </h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 2 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        1 periode bootcamp digelar selama 12 minggu.
                                                        Per minggu akan 3 kali pertemuan. 1
                                                        pertemuan 2-3 jam.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div
                                className="faq-accordion wow fadeInRight mt-30"
                                data-wow-duration="1500ms"
                            >
                                <div
                                    className="accrodion-grp animated fadeIn faq-accrodion wow"
                                    data-wow-duration="1500ms"
                                    data-grp-name="faq-accrodion"
                                >
                                    <div
                                        onClick={() => openQuestion(3)}
                                        className={`accrodion ${showQues === 3 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Apakah bootcamp ini full online?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 3 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Benar, untuk saat ini tiap pertemuan digelar
                                                        online pada malam hari.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => openQuestion(4)}
                                        className={`accrodion ${showQues === 4 ? 'active' : ''}`}
                                    >
                                        <div className="accrodion-inner">
                                            <div className="accrodion-title">
                                                <h4>Apakah ada program hiring?</h4>
                                            </div>
                                            <div
                                                className="accrodion-content"
                                                style={{
                                                    display: showQues === 4 ? 'block' : 'none',
                                                }}
                                            >
                                                <div className="inner">
                                                    <p>
                                                        Diakhir periode bootcamp akan digelar hiring
                                                        bersama perusahaan tekonologi (partner
                                                        Cooderu)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12" hidden>
                            <div className="faq-text text-center pt-40">
                                <p>
                                    Can't find an answer?{' '}
                                    <a href="mailto:hellocooderu@gmail.com">Email us</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FaqHomeOne;
