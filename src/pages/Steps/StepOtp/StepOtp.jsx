import React, { useState } from 'react';
import Card from '../../../components/shared/Card/Card';
import Styles from '../StepPhoneEmail/SetpPhoneEmail.module.css';
import Button from '../../../components/shared/Button/Button';
import TextInput from '../../../components/shared/Textinput/Textinput';
import { verifyOtp } from '../../../http';
import { useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import { useDispatch } from 'react-redux';

const StepOtp = () => {
    const [otp ,setOtp] = useState('');
    const dispatch = useDispatch();
    const {phone, hash} = useSelector((state)=>state.auth.otp);
    async function submit() {
        if(!otp || !phone || !hash) return alert('Please fill the otp!');
        try{
            const {data} = await verifyOtp({otp, phone, hash});
            console.log(data);
            dispatch(setAuth(data));
           
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div className={Styles.cardWrapper}>
                <Card title="Enter the code we just texted you" icone="lock">
                    <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <div>
                        <div className={Styles.actionButtonWrap}>
                            <Button onClick={submit} text="Next" />
                        </div>
                        <p className={Styles.bottomParagraph}>
                            By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                        </p>
                    </div>


                </Card>
            </div>

        </>
    )
}

export default StepOtp
