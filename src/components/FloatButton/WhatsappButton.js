import React from 'react';
import WhatsappIcon from '../../assets/images/icon/whatsapp.png';
// phone="+6281314984021"

export default function WhatsappButton() {
    return (
        <a href="https://wa.me/6281314984021" className="wa-float" rel="noreferrer" target="_blank">
            <img src={WhatsappIcon} alt="" className="fa fa-plus my-wa-float" />
        </a>
    );
}
