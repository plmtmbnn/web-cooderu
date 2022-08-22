import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">
                        Program <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link to="#">Backend</Link>
                        </li>
                        <li>
                            <Link to="#">Frontend</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="#">Daftar Bootcamp</Link>
                </li>

                <li>
                    <Link to="#faq-page">FAQ</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
