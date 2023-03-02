import React from 'react';
import styles from './Card.module.css';
import Logo from '../../../images/logo.png';
import ArrowForward from '../../../images/arrow-forward.png';
import Phone from '../../../images/phone.png';

const icons = {
    logo: Logo,
    'arrow-forward': ArrowForward,
    phone: Phone,
};

const Card = ({ title, icon, children }) => {
    return (
        <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src={icons[icon]} alt='logo' />
                <h1 className={styles.heading}>{title}</h1>
            </div>
            {children}
        </div>
    );
};

export default Card;
