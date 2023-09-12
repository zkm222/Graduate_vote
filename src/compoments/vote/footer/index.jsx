import React,{useState,useEffect} from "react";
import styles from './footer.module.css'
import Submit from '../button';
const Footer = ((props) => {
    // const [limit,setLimit]=useState(props.limit);
    // const [checked,setChecked]=useState(props.checked);
    // useEffect(()=>{
    //     console.log("qwq")
    //     // setChecked(props.checked)
    //     setChecked(props.limit)
    // },[props.limit])
    console.log(props)
    console.log(props.limit)
    console.log(props.checked)
    return (
        <div className={styles.bottom}>
            <div className={styles.limit}>每人限投 <span className={styles.limitmark}>1{props.limit}</span> 票
            , 已投<span className={styles.limitmark}> {props.checked} </span>票
            </div>
            <Submit></Submit>
        </div>
    )
})
export default Footer