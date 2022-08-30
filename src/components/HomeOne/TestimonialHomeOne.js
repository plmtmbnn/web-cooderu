import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import userOne from '../../assets/images/testimonial-user-01.png';
import userTwo from '../../assets/images/testimonial-user-02.png';
import userThree from '../../assets/images/testimonial-user-03.png';

function TestimonialHomeOne({ className }) {
    const sliderRef = useRef();
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <section
            className={`appie-testimonial-area pt-100 pb-160 ${className || ''}`}
            id="testimonial"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="appie-testimonial-slider" style={{ position: 'relative' }}>
                            <span
                                className="prev slick-arrow"
                                style={{ display: 'block' }}
                                onClick={sliderNext}
                                role="button"
                                tabIndex="0"
                            >
                                <i className="fal fa-arrow-left" />
                            </span>
                            <Slider ref={sliderRef} dots arrows={false}>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={userOne} alt="" />
                                        <h5 className="title">Daffa</h5>
                                        <span>Batch 1 Alumni (PinjamModal)</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            The curriculum provided by Coderuu is very useful for me
                                            because it's relevant with the industry, so that makes
                                            me easier to apply it in the workplace.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={userTwo} alt="" />
                                        <h5 className="title">Oscar</h5>
                                        <span>Batch 1 Alumni (PinjamModal)</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Experienced & fast-responding instructors really helped
                                            me to understanding every material and solving problems
                                            I encountered while attending bootcamp.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="appie-testimonial-item text-center">
                                    <div className="author-info">
                                        <img src={userThree} alt="" />
                                        <h5 className="title">Stanley</h5>
                                        <span>Batch 1 Alumni</span>
                                    </div>
                                    <div className="text">
                                        <p>
                                            The syllabus is very focused and the classes are very
                                            flexible, making it easier for me who is busy in other
                                            places.
                                        </p>
                                        <ul>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                            <li>
                                                <i className="fas fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Slider>
                            <span
                                onClick={sliderPrev}
                                role="button"
                                tabIndex="-1"
                                className="next slick-arrow"
                                style={{ display: 'block' }}
                            >
                                <i className="fal fa-arrow-right" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialHomeOne;
