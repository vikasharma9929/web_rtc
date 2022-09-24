import React, { useState, useEffect } from 'react'
import Styles from './stepAvatar.module.css';
import Card from '../../../components/shared/Card/Card';
import Button from '../../../components/shared/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setAvatar } from '../../../store/activateSlice';
import { activate } from '../../../http';
import {setAuth} from '../../../store/authSlice'
import Loader from '../../../components/shared/Loader/Loader';



const StepAvtar = ({ onNext }) => {
    const dispatch = useDispatch();
    const {name, avatar}= useSelector((state) => state.activate);
    const [image, setImage] = useState('/images/dumy-profile.png');
    const [loading , setLoading ]= useState(false);
    const [unmounted, setUnMounted] = useState(false);

    function captureImage(e){
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(){
            console.log(reader.result);
            setImage(reader.result);
            dispatch(setAvatar(reader.result));
        }
       
    }

    async function submint() {
        if(!name || !avatar) return alert(`${name} Please upload your photo!`);
        setLoading(true);
        try{
            const{data} = await activate({name, avatar});
            if(data.auth){
                if(!unmounted){
                    dispatch(setAuth(data));
                }
            }        
        }catch(err){
            console.log(err);            
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        
        return () => {
            setUnMounted(true);
        }
    }, [])

if(loading) return <Loader message="Activation in progress ..."/>
    return (
        <>
            <Card title={`Okay, ${name}`} icone="Group 3">
                <p className={Styles.subheading}>
                    How’s this photo?
                </p>
                <div className={Styles.avatarWarpper}>
                    <img className={Styles.avatarImage} src={image} alt="avatar" />
                </div>
                <div>
                    <input onChange={captureImage} id='avtarInput' type="file" className={Styles.avatarInput} />
                    <label className={Styles.avatarlable} htmlFor="avtarInput">Choose a different photo</label>
                </div>
                <div>
                    <Button onClick={submint} text="Next" />
                </div>
            </Card>
        </>
    )
}

export default StepAvtar
