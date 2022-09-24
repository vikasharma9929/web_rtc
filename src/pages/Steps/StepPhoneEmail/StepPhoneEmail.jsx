import React, { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import Styles from './SetpPhoneEmail.module.css';

const phoneEmailMap = {
    phone: Phone,
    email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];


    return (
        <>
            <div className={Styles.cardWrapper}>
                <div className={Styles.buttonWrap}>
                    <button className={`${Styles.tabButton} ${type==='phone' ? Styles.active:''}`}
                     onClick={() => setType('phone')}><img src='./images/phone.png' alt='phone'/></button>
                    <button className={`${Styles.tabButton} ${type==='email' ? Styles.active:''}`} onClick={() => setType('email')}><img src='./images/Email.png' alt='email'/></button>
                </div>
                <Component onNext={onNext} />
            </div>


        </>
    )
}

export default StepPhoneEmail
