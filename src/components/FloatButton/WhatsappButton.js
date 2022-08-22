import React from 'react';
import WhatsappIcon from '../../assets/images/icon/whatsapp.png';
// phone="+6281283968844"

export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/+6281283968844"
            className="wa-float"
            rel="noreferrer"
            target="_blank"
        >
            <img src={WhatsappIcon} alt="" className="fa fa-plus my-wa-float" />
        </a>
    );
}
