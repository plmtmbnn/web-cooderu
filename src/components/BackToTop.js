import React, { useEffect } from 'react';
import TopToBottom from '../lib/TopToBottom';
import WhatsappIcon from '../assets/images/icon/whatsapp.png';

function BackToTop({ className }) {
    useEffect(() => {
        TopToBottom('.back-to-top');
    });
    return (
        <>
            <div className={`back-to-top ${className || ''}`}>
                <a href="#">
                    <i className="fal fa-arrow-up" />
                </a>
            </div>
            <a
                href="https://wa.me/+6281283968844"
                className="wa-float"
                rel="noreferrer"
                target="_blank"
            >
                <img src={WhatsappIcon} alt="" className="fa fa-plus my-wa-float" />
            </a>
        </>
    );
}

export default BackToTop;
