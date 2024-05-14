import React from 'react';
import fr_flag from '../../assets/images/french_flag.webp';
import uk_flag from '../../assets/images/uk_flag.webp';
import LanguageButton from './LanguageButton';
import Nav from '../nav/Nav';

function Header() {

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