import React, { useState } from 'react';
import Card from '../../../../components/shared/Card/Card';
import Button from '../../../../components/shared/Button/Button';
import Textinput from '../../../../components/shared/Textinput/Textinput';
import Styles from '../SetpPhoneEmail.module.css';
import {sendOtp} from '../../../../http/index';
import {useDispatch} from 'react-redux';
import { setOtp } from '../../../../store/authSlice';

export const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNUmber] = useState('');
    const dispatch = useDispatch();

    async function submit(){
        if(!phoneNumber) return alert('Phone field are required!');
        //server request
       const {data} = await sendOtp({phone:phoneNumber});
       console.log(data);
       dispatch(setOtp({phone:data.phone, hash:data.hash}));
        onNext();
    }

    return (
        <Card title="Enter you phone number" icone="tellyphone">
            <Textinput value={phoneNumber} onChange={(e) => setPhoneNUmber(e.target.value)} />
            <div>
                <div className={Styles.actionButtonWrap}>
                <Button onClick={submit} text="Next" />
                </div>
                <p className={Styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                </p>
            </div>


        </Card>
    )
}

export default Phone
