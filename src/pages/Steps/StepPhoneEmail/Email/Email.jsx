import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import Textinput from '../../../../components/shared/Textinput/Textinput'
import Styles from '../SetpPhoneEmail.module.css';


export const Email = ({ onNext }) => {
    const [email, setEmail] = useState('');
    return (
        <Card title="Enter your email id" icone="Email 2">
               <Textinput value={email} onChange={(e) => setEmail(e.target.value)} />
                <div>
                <div className={Styles.actionButtonWrap}>
                <Button onClick={onNext} text="Next" />
                </div>
                <p className={Styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!
                </p>
                </div>
            </Card>
    )
}
export default Email
