import React from 'react';

function Footer() {

    return (
        <footer className="footer">
            <div className="footer__desc">   
                <div className="footer__desc__text">
                    <div className="footer__desc__text__copyright">
                        <h2 className="footer__desc__text__copyright--title"><i class="fa-regular fa-copyright"></i><p>Dunis Lucas</p></h2>
                    </div>
                    <div className="spacer__footer"></div>
                    <p>Développeur web FullStack, passionné par l'informatique. Toujours en quête d'apprendre et intéressé à l'idée d'inover !</p>
                </div>
                <div className="footer__desc__links">   
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
            </div>
        </footer>
    );
}

export default Footer;