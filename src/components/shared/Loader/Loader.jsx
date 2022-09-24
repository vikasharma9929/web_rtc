import React from 'react';
import Card from '../Card/Card';
import Styles from './Loader.module.css';

const Loader = ({ message }) => {
    return (
        <div className='cardWrapper'>
            <Card>
                <svg className={Styles.spinner} width="41" height="42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 39c9.941 0 18-8.059 18-18S29.941 3 20 3 2 11.059 2 21s8.059 18 18 18z" stroke="#C4C5C5" stroke-width="4" />
                    <path d="M19.778 1.001A20 20 0 11.542 25.627l3.876-.922a16.016 16.016 0 1015.404-19.72l-.044-3.984z" fill="#5453E0" /></svg>
                <span className={Styles.message}>{message}</span>

            </Card>
        </div>
    )
}

export default Loader
