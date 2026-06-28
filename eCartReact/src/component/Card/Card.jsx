import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ theme, item }) => {

    return (
        <div key={item.id} className={[styles.card, theme === "light" ? styles.cardLight : styles.cardDark].join(' ')}>
            <div className={styles.imageBlock} >
                <Link to={`/detail/${item.id}`}>
                    <img className={styles.Image} src={item.imageLink} />
                </Link>
            </div>

            <div className={theme === "light" ? styles.DescBlockLight : styles.DescBlockDark}>
             <h3>{item.name}</h3>
              <p className={styles.itemDesc}>{item.shortDesc}</p>
                
                <div className={styles.detail}>
                    <div className={styles.price}>$ {item.price}</div>
                    <div className={theme === "light" ? styles.btnLight : styles.btnDark} >Add To Cart</div>
                </div>

            </div>
        </div>
    )
}

export default Card
