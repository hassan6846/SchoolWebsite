import React from 'react'
import { FaPhoneAlt,FaMapMarkerAlt  } from "react-icons/fa";
//css
import styles from "./Navbar.module.css"
import { altval } from '../../constant/consts'


const Navbar = () => {
    return (
        <nav  className={styles.Navbar}>
            <div className={styles.ImageWrapper} >
                <img draggable={false} className={styles.NavLink} src='./icon.png' alt={altval} />
                <p className={styles.NavPhone}> <FaMapMarkerAlt  /><span>4-Y Govt Colony Okara, Okara, Pakistan</span></p>
                <a  href="tel:0331 6883686" className={styles.NavPhone}><FaPhoneAlt/><span>0331 6883686</span></a>
           
            </div>
        </nav>
    )
}

export default Navbar