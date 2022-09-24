import React from 'react'
import style from './Card.module.css'

const Card = ({ title, icone, children }) => {
    return (
        <div className={style.card}>

            <div className={style.headinWapper}>
                {icone && <img src={`./images/${icone}.png`} alt="logo" />}
                {title && <h1 className={style.heading}>{title}</h1>}
            </div>
            {children}
        </div>
    )
}

export default Card
