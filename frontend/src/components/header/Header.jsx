import React from 'react';
import fr_flag from '../../assets/images/french_flag.png';
import uk_flag from '../../assets/images/uk_flag.png';
import LanguageButton from './LanguageButton';

function Header() {

    return (
        <header className="header">
            <div className="header__language">
                <LanguageButton langCode="fr" flagSrc={fr_flag} altText="French flag" />
                <LanguageButton langCode="en" flagSrc={uk_flag} altText="Uk flag" />
            </div>
        </header>
    );
}

export default Header;