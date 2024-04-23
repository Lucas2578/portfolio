import React from 'react';
import Nav from '../nav/Nav';
import fr_flag from '../../assets/images/french_flag.png';
import uk_flag from '../../assets/images/uk_flag.png';
import LanguageButton from './LanguageButton';

function Header() {
    const githubUrl = 'https://github.com/Lucas2578';

    return (
        <header className="header">
            <div className="header__language">
                <LanguageButton langCode="fr" flagSrc={fr_flag} altText="French flag" />
                <LanguageButton langCode="en" flagSrc={uk_flag} altText="Uk flag" />
            </div>
            <Nav />
        </header>
    );
}

export default Header;