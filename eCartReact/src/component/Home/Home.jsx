import  { useContext } from 'react'
import styles from './Home.module.css'
import { ThemeContext } from '../../ThemeContext'
import Card from '../Card/Card';
import product from '../../utils/product.json'
import RecCard from '../RecommendedCard/RecCard'
import recommendedItem from '../../utils/recommendedItem.json';


const Home = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={[styles.home, theme === 'light' ? styles.homeLight : styles.homeDark].join(' ')}>
            <div className={styles.bannerDiv}>
                <img className={styles.bannerImg} src='https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp' />
            </div>

            <div className={styles.products}>
                <div>
                    <h2>Trending Items</h2>
                    <div className={styles.productHorizontalList}>

                        {
                            product.map((item, id) => {
                                return (
                                    <Card theme={theme} item={item} />
                                );
                            })
                        }

                    </div>
                </div>

             <div>
                <h2>Recommended Items</h2>
                <div className={styles.recommendedBlock}>
                    {
                        recommendedItem.map((item)=>{
                            return(
                                <RecCard theme={theme} item={item} />
                            );
                        })
                    }
                    
                </div>
            </div>

            <div>
                <h2>Trending Items</h2>
                <div className={styles.productHorizontalList}>

                    {
                        product.reverse().map((item,id)=>{
                            return(
                                <Card theme={theme} item={item} />
                            );
                        })
                    }

                </div>
            </div>

            </div>
        </div>
    )
}

export default Home
