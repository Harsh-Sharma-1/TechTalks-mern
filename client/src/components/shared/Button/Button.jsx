import React from 'react';
import Arrow from '../../../images/arrow-forward.png';
import styles from './Button.module.css';
const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img className={styles.arrow} src={Arrow} alt='arrow' />
        </button>
    );
};

export default Button;
