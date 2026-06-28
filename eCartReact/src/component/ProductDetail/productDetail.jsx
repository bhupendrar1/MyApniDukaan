import React, { useContext, useEffect , useState} from 'react'
import styles from './productDetail.module.css'
import { ThemeContext } from '../../ThemeContext'
import products from '../../utils/product.json'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'





const productDetail = () => {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext);

     const dispatch = useDispatch()

    const [data,setData] = useState(null);

     useEffect(()=>{
        let product = products.find((ids)=>ids.id===id)
        setData(product);
        
    },[id])

    return (
        <div className={[styles.productDetail, theme === 'light' ? styles.productDetailLight : styles.productDetailDark].join(' ')}>
            <div className={styles.productImage}>
                <img src={data?.imageLink} className={styles.Image} />
            </div>

            <div className={styles.productDetailBlock}>
                <h1>{data?.productName}</h1>
                <p style={{fontSize:"24px"}}> {data?.detailsDesc}</p>
                <h1 className={styles.itemPrice}>$ {data?.price}</h1>
                <div className={theme==='light'?styles.btnLight:styles.btnDark} onClick={() => dispatch(addToCart(data))}>
                    Add To Cart
                </div>
            </div>
        </div>
    )
}

export default productDetail