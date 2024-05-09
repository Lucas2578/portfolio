import React from 'react';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__desc">   
                <div className="footer__desc__links">
                    <a href="test" className="footer__desc__links--link"><i class="fa-brands fa-linkedin footer__desc__links--icon"></i></a>
                    <a href="test" className="footer__desc__links--link"><i class="fa-solid fa-envelope footer__desc__links--icon"></i></a>
                    <a href="test" className="footer__desc__links--link"><i class="fa-solid fa-file-lines footer__desc__links--icon"></i></a>
                </div>
                <div className="footer__desc__info">
                    <i class="fa-solid fa-copyright footer__desc__info--icon"></i><p>Portfolio Dunis Lucas 2024</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;