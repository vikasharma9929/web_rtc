import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../http'
import { setAuth } from '../../../store/authSlice'
import Styles from './Navigation.module.css'

function Navigation() {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center'
    }
    const logoText = {
        marginLeft: '10px'
    }

    const dispatch = useDispatch();
    const { user, isAuth } = useSelector((state) => state.auth);
    async function logoutUser() {
        try {
            const { data } = await logout();
            dispatch(setAuth(data));
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <nav className={`${Styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src="/images/hand.png" alt="logo" />
                <span style={logoText}>WSE House</span>
            </Link>
            {isAuth && <div className={Styles.navRight}>
                <h3>{user?.name}</h3>
                <Link to="/">
                    <img
                        className={Styles.avatar}
                        src={user.avatar ? user.avatar: '/images/dumy-profile.png'}
                        alt="avatar"
                    />
                </Link>
                <button className={Styles.logoutBUtton} onClick={logoutUser}><i className="fas fa-sign-out-alt"></i></button>
            </div>}
        </nav>


    )
}

export default Navigation
