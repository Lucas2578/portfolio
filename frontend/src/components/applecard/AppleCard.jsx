import React from 'react';
import ProfilePicture from '../../assets/images/profile_picture.jpg';
import calculateAge from '../../utils/calculateAge';
import appleCard_home from '../../utils/language/appleCard_home';

const AppleCard = ({ language }) => {
    const birthDate = '2002-03-25';
    const age = calculateAge(birthDate);

    const texts = language === 'fr' ? appleCard_home.fr : appleCard_home.en;

  return (
    <div className="card">
      <div className="card__header">
        <i className="fa-solid fa-circle red"></i>
        <i className="fa-solid fa-circle yellow"></i>
        <i className="fa-solid fa-circle green"></i>
      </div>
      <div className="card__body">
        <img src={ProfilePicture} alt="Profile" className="card__body-picture" />
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