import React from "react";
import styles from './header.module.css'
const Header = (() => {
    return (
        <div className={styles.top}>
            <img src="../public/photo/name.png" className={styles.name} srcset="" />
            <h3 className={styles.title}>支 教 保 研 投 票 系 统</h3>
        </div>
    )
})
export default Header