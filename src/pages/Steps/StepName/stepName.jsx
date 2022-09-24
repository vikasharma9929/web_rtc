import React, {useState} from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/Textinput/Textinput'
import Styles from './stepName.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'

const StepName = ({ onNext }) => {
    const {name}= useSelector((state) => state.activate);
    const dispatch = useDispatch();
    const [fullname, setfullname] = useState(name);

    function nextStep (){
        if(!fullname){
            return alert('Name field are required!');
        }
        dispatch(setName(fullname));
        onNext();
    }

    return (
        <>
            <Card title="What’s your full name?" icone="google">
                <TextInput value={fullname} onChange={(e) => setfullname(e.target.value)} />
                <div>
                    <p className={Styles.paragraph}>
                    People use real names at codershouse :) 
                    </p>
                    <div className={Styles.actionButtonWrap}>
                        <Button onClick={nextStep} text="Next" />
                    </div>
                </div>


            </Card>
        </>
    )                                                                                                            
}
export default StepName;