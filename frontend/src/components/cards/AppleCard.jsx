import React from 'react';
import ProfilePicture from '../../assets/images/profile_picture.jpg';
import calculateAge from '../../utils/calculateAge';
import { useLanguage } from '../../utils/language/LanguageContext';

const AppleCard = () => {
    // My birthday date for calculate my age
    const birthDate = '2002-03-25';
    const age = calculateAge(birthDate);
    // Translates
    const { translations } = useLanguage();

    return (
      <div className="card">
        <div className="card__header">
          <i className="fa-solid fa-circle red"></i>
          <i className="fa-solid fa-circle yellow"></i>
          <i className="fa-solid fa-circle green"></i>
        </div>
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