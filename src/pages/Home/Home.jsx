 import React from 'react'
import style from './Home.module.css';
import { Link, useHistory } from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';


const Home = () => {
    const signinLink={
        color:'#0077ff',
        fontWeight:'bold',
        textDecoration:'none',
        marginLeft:'10px'
    }

    const hestory = useHistory();

    function startRegister(){
        hestory.push('/authenticate')
    }

    return (
        <div className={style.cardWApper}>
            <Card title="Welcome to WSE House !" icone="hand">
                <p className={style.paragraph}>
                    We’re working hard to get WSE house ready for everyone!
                    While we wrap up the finishing youches, we’re adding people gradually
                    to make sure nothing breaks :)
                </p>
                <div>
                    <Button onClick={startRegister} text="Lest's Go" />
                </div>
                <div className={style.sign}>
                    <span className={style.hasinvite}>have an invited text?</span>
                   
                </div>

            </Card>


        </div>
    )
}

export default Home

