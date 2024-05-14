import React from 'react';
import ProfilePicture from '../../../assets/images/profile_picture.webp';
import { useLanguage } from '../../../utils/language/LanguageContext';
import HeaderCard from '../HeaderCard';

const AppleCard = ({ age }) => {
    // Translates
    const { translations } = useLanguage();

    return (
      <div className="card">
          <HeaderCard />
          <div className="card__body">
              <img src={ProfilePicture} alt="Profile" className="card__body-picture" />
              {/* Replace {age} per age based at birthDate and function calculateAge */}
              <h2>{translations.home_page.about_me.title.replace('{age}', age)}</h2>
              <p>{translations.home_page.about_me.desc}</p>
              <div className="card__body__desc">
                  <p>{translations.home_page.about_me.desc_body}</p>
              </div>
          </div>
      </div>
    );
};

export default AppleCard;