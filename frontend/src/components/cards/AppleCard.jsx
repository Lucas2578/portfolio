import React from 'react';
import ProfilePicture from '../../assets/images/profile_picture.jpg';
import calculateAge from '../../utils/calculateAge';
import { fr_home_page } from '../../utils/language/translates/translations_fr'
import { en_home_page } from '../../utils/language/translates/translations_en'

const AppleCard = ({ language }) => {
    // My brithday date for calculate my age
    const birthDate = '2002-03-25';
    const age = calculateAge(birthDate);

    // Checking language, if "fr" charging translations fr
    const texts = language === 'fr' ? fr_home_page.about_me : en_home_page.about_me;

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
          <h2>{texts.title.replace('{age}', age)}</h2>
          <p>{texts.desc}</p>
          <div className="card__body__desc">
              <p>{texts.desc_body}</p>
          </div>
        </div>
      </div>
    );
};

export default AppleCard;