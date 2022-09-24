import React from 'react'
import styles from './RoomCard.module.css'
import {useHistory} from 'react-router-dom';

const Roomcard = ({ room }) => {
    const history = useHistory();
    return (
        <div onClick={()=>{history.push(`/room/${room.id}`)}} className={styles.card}>
            <h3 className={styles.topic}>{room.topic}</h3>
            <div className={`${styles.speackers}${room.speackers.lenght === 1 ? styles.singlespeacker : ''}`}>
                <div className={styles.avatars}>
                    {room.speackers.map((speacker) => (
                        <img key={speacker.id} src={speacker.avatar} alt="speaker-avatar" />
                    ))}
                </div>
                <div className={styles.names}>
                    {room.speackers.map((speacker) => (
                        <div key={speacker.id} className={styles.nameWarpper}>
                            <span>{speacker.name}</span>
                            <img src="/images/chat-bubble.png" alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.peopleCount}>
                        <span>{room.totalPeople}</span>
                        <img  src="/images/user-icon.png" alt="" />
            </div>
        </div>
    )
}

export default Roomcard

