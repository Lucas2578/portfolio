import React from 'react';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__desc">   
                <div className="footer__desc__links">
                    <a href="https://www.linkedin.com/in/lucas-dunis-431b07308" target="_blank" rel="noopener noreferrer" className="footer__desc__links--link">
                        {/* This span is necessary for resolve wave errors with <a> tag missing text */}
                        <span className="footer__desc__links--invisible-text">LinkedIn</span>
                        <i className="fa-brands fa-linkedin footer__desc__links--icon"></i>
                    </a>
                    <a href="mailto:lucasdunis@gmail.com" className="footer__desc__links--link">
                        {/* This span is necessary for resolve wave errors with <a> tag missing text */}
                        <span className="footer__desc__links--invisible-text">Mail</span>
                        <i className="fa-solid fa-envelope footer__desc__links--icon"></i>
                    </a>
                    <a href="assets/CV_Dunis_Lucas.pdf" target="_blank" rel="noopener noreferrer" className="footer__desc__links--link">
                        {/* This span is necessary for resolve wave errors with <a> tag missing text */}
                        <span className="footer__desc__links--invisible-text">CV</span>
                        <i className="fa-solid fa-file-lines footer__desc__links--icon"></i>
                    </a>
                </div>
                <div className="footer__desc__info">
                    <i className="fa-solid fa-copyright footer__desc__info--icon"></i><p>Portfolio Dunis Lucas 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;