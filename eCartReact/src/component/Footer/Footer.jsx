import {useContext} from 'react'
import styles from './Footer.module.css'
import { ThemeContext } from '../../ThemeContext'

const Footer = () => {
    const {theme} = useContext(ThemeContext);

  return (
    <div className={theme==='light'?styles.footerLight:styles.footerDark}>
        @MyApniDukaan
    </div>
  )
}

export default Footer