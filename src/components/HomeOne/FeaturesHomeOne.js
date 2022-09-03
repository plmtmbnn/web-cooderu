import React, { useState } from 'react';
import { Modal } from 'antd';
import thumbBe from '../../assets/images/features-thumb-be.png';
import thumbFe from '../../assets/images/features-thumb-fe.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

const syllabus = {
    FRONTEND: [
        'Introduction HTML',
        'Introduction CSS',
        'Introduction CSS - Layouting',
        'Introduction - Grid & Flex',
        'Introduction JavaScript',
        'Introduction JQuery',
        'Introduction Bootstrap',
        'Introduction React JS',
        'Advanced React JS',
        'React Hook',
        'React UI Framework',
        'Introduction Rest API & Integration',
        'Introduction React Redux & LocalStorage',
        'Implement Form Validation',
        'Belajar Deploy dan Hosting Sendiri',
        'Mengerjakan beberapa Latihan & Project',
    ],
    BACKEND: [
        'Introduction JavaScript Fundamental',
        'Introduction Algorithm',
        'Introduction Class & OOP',
        'Big O and Data Structure',
        'NPM FS Module',
        'Deal with Async',
        'Introduction Express JS',
        'Introduction RDBMS',
        'Introduction ORM (Sequelize)',
        'Introduction JWT Middleware',
        'Introduction NoSQL',
        'Belajar Deploy dan Hosting Sendiri',
        'Mengerjakan beberapa Latihan & Project',
    ],
};

function FeaturesHomeOne({ className }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [targetProgram, settargetProgram] = useState('BACKEND');

    const showModal = (targetProgramNew) => {
        settargetProgram(targetProgramNew);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`appie-features-area pt-100 ${className}`} id="features">
            <Modal
                title={`Program: ${targetProgram}`}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                {Array(...syllabus[targetProgram]).map((e, index) => (
                    <>
                        <p>
                            {index + 1}
                            {'. '}
                            {e}
                        </p>{' '}
                    </>
                ))}
            </Modal>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="appie-features-tabs-btn">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    onClick={(e) => handleClick(e, 'setting')}
                                    className={`nav-link ${tab === 'setting' ? 'active' : ''}`}
                                    id="v-pills-home-tab"
                                    data-toggle="pill"
                                    href="#v-pills-home"
                                    role="tab"
                                    aria-controls="v-pills-home"
                                    aria-selected="true"
                                >
                                    <i className="fas fa-brackets-curly" /> Backend
                                </a>
                                <a
                                    onClick={(e) => handleClick(e, 'report')}
                                    className={`nav-link ${tab === 'report' ? 'active' : ''}`}
                                    id="v-pills-profile-tab"
                                    data-toggle="pill"
                                    href="#v-pills-profile"
                                    role="tab"
                                    aria-controls="v-pills-profile"
                                    aria-selected="false"
                                >
                                    <i className="fas fa-palette" /> Frontend
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumbBe} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Program Bootcamp</span>
                                            <h3 className="title">Backend Developer</h3>
                                            <p>
                                                Latih dan tingkatkan keterampilan yang dibutuhkan
                                                untuk memulai karir Back End Developer yang andal
                                                dalam 12 minggu. <br />
                                                <br />
                                                Dasar-dasr JS, Nodejs, API, Middleware, dan banyak
                                                lagi serta beberapa latihan dan project.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => showModal('BACKEND')}
                                                className="main-btn"
                                            >
                                                Silabus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'report' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-profile"
                                role="tabpanel"
                                aria-labelledby="v-pills-profile-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumbFe} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Program Bootcamp</span>
                                            <h3 className="title">Frontend Developer</h3>
                                            <p>
                                                Latih dan tingkatkan keterampilan yang dibutuhkan
                                                untuk memulai karir Front End Developer yang andal
                                                dalam 12 minggu.
                                                <br />
                                                <br />
                                                Dasar-dasar HTML, CSS, JS, ReactJS, dan banyak lagi
                                                serta beberapa latihan dan project.
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => showModal('FRONTEND')}
                                                className="main-btn"
                                            >
                                                Silabus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
            <br />
            <br />
            <br />
        </section>
    );
}

export default FeaturesHomeOne;
