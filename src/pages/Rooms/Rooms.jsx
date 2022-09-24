import React, { useEffect, useState } from 'react'
import styles from './Rooms.module.css'
import RoomCard from '../../components/shared/RoomCard/RoomCard'
import AddRoomModel from '../../components/shared/AddroomModel/AddRoomModel';
import { getAllRooms } from '../../http/index'

// const rooms = [
//     {
//         id: 1,
//         topic: 'Which framework best for frontend ?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 3,
//         topic: 'What’s new in machine learning?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 4,
//         topic: 'Why people use stack overflow?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//         ],
//         totalPeople: 40,
//     },
//     {
//         id: 5,
//         topic: 'Artificial inteligence is the future?',
//         speakers: [
//             {
//                 id: 1,
//                 name: 'John Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//             {
//                 id: 2,
//                 name: 'Jane Doe',
//                 avatar: '/images/ironman.jpg',
//             },
//         ],
//         totalPeople: 40,
//     },
// ];

const Rooms = props => {
    const[showModel, setshowModel] = useState(false);
    const[rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const { data } = await getAllRooms();
            console.log(data);
            setRooms(data);
            
        };
        fetchRooms();
    }, []);

    function openModel(){
        setshowModel(true)
    }
    return (
        <>
            <div className="container">
                <div className={styles.roomsHeader}>
                    <div className={styles.left}>
                        <span className={styles.heading}>All voice rooms</span>
                        <div className={styles.searchBox}>
                            <img src="/images/search-icon.png" width="17.49px" height='17.49px' alt="search-icon" />
                            <input className={styles.searchInput} type="text" />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <button onClick={openModel} className={styles.startButton}>
                            <img src="./images/add-room.png" width="22px" height='19px' alt="add-room" />
                            <span>Start a room</span>
                        </button>
                    </div>
                </div>
                <div className={styles.roomList}>
                    {rooms.map((room) => (
                        <>
                        <RoomCard key={room.id} room={room} />
                        
                        </>
                    ))}
                </div>

            </div>
            {showModel && <AddRoomModel onclose={()=> setshowModel(false)}/>}
        </>
    )
}

Rooms.propTypes = {

}

export default Rooms
