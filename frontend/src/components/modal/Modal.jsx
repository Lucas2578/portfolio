import React from 'react';

// Add modalClass, title for modal and actual state modal on props
const Modal = ({ modalClass, title, isModalOpen }) => {
    return (
        <>
            {isModalOpen && (
                <div className={`${modalClass}__modalcard`}>
                    <div className={`${modalClass}__modalcard__header`}>
                        <i className={`fa-solid fa-circle red ${modalClass}__card__header--icon`}></i>
                        <i className={`fa-solid fa-circle yellow ${modalClass}__card__header--icon`}></i>
                        <i className={`fa-solid fa-circle green ${modalClass}__card__header--icon`}></i>
                    </div>
                    <div className={`${modalClass}__modalcard__body`}>
                        <h3 className={`${modalClass}__modalcard__body--title`}>{title}</h3>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;