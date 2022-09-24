import React, { useState } from 'react'
import styles from './AddRoomModel.module.css'
import TextInput from '../../shared/Textinput/Textinput'
import { createRoom as create } from '../../../http/index'
import { useHistory } from 'react-router-dom';


const AddRoomModel = ({ onclose }) => {

    const history = useHistory();
    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');




    async function createRoom() {
        //server call you second ago uncommited change
        try {
            if (!topic) {
                return;
            }
            const { data } = await create({ topic, roomType });
            history.push(`/room/${data.id}`)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={styles.modelMask}>
            <div className={styles.modelBody}>
                <button onClick={onclose} className={styles.closebutton}>
                    <i class="fas fa-times"></i>
                </button>
                <div className={styles.modelHeader}>
                    <h3 className={styles.heading}>Enter the topic to be disscussed</h3>
                    <TextInput fullwidth="true" value={topic} onChange={(e) => setTopic(e.target.value)} />
                    <h2 className={styles.subheading}>Rooms types</h2>
                    <div className={styles.roomsTypes}>
                        <div onClick={() => { setRoomType('open') }} className={`${styles.typeBox} ${roomType === 'open' ? styles.active : ''}`}>
                            <img src="/images/globe.png" alt="globe" />
                            <span>Open</span>
                        </div>
                        <div onClick={() => { setRoomType('social') }} className={`${styles.typeBox} ${roomType === 'social' ? styles.active : ''}`}>
                            <img src="/images/public.png" alt="public" />
                            <span>Social</span>
                        </div>
                        <div onClick={() => { setRoomType('privet') }} className={`${styles.typeBox} ${roomType === 'privet' ? styles.active : ''}`}>
                            <img src="/images/lock 2.png" alt="lock" />
                            <span>Privet</span>
                        </div>
                    </div>
                </div>
                <div className={styles.modelfooter}>
                    <h2>Start a room, open to everyone</h2>
                    <button onClick={createRoom} className={styles.footerbuttn}><img src="/images/celebreation.png" alt="celibretion" /><span>Let's go</span></button>
                </div>
            </div>
        </div>
    )
}

export default AddRoomModel
