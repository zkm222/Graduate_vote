import React,{useState,useEffect} from "react";
import styles from './footer.module.css'
import Submit from '../button';
const Footer = ((props) => {
    return (
        <div className={styles.bottom}>
            <div className={styles.limit}>每人限投 <span className={styles.limitmark}>{props.limit}</span> 票
            , 已投<span className={styles.limitmark}> {props.checked} </span>票
            </div>
            <Submit limit={props.limit} check={props.checked} list={props.list}></Submit>
        </div>
    )
})
export default Footer