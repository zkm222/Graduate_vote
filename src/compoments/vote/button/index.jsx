import React from "react"
import { Button } from 'antd'
import styles from './button.module.css'
import axios from "axios"
import { Routes, Route, Link ,useParams,useLocation,useNavigate} from "react-router-dom";
const Submit = ((props) => {
    const navigate=useNavigate()
    const sentResult=()=>{
        if(props.check!=props.limit){
            if(confirm(`当前已投${props.check}票,是否确定提交？`)==true){
                axios({
                method:'post',//请求方式
                url:'http://localhost:8081/vote',//请求地址
                params:'',//和url一起发送的数据（如get请求）
                data:props.list,//必要参数，
                // 自定义请求头
                }).then(
                res=>{
                    console.log(res)
                    navigate("/waiting",{replace:true})
                }
                )
            }
        }
        else{
            if(confirm(`当前已投${props.check}票,是否确定提交？`)==true){
                axios({
                method:'post',//请求方式
                url:'http://localhost:8081/vote',//请求地址
                params:'',//和url一起发送的数据（如get请求）
                data:props.list,//必要参数，
                // 自定义请求头
                }).then(
                res=>{
                    console.log(res)
                    navigate("/waiting",{replace:true})
                }
                )
            }
        }
    }
    return (
        <div className={styles.submitContainer}>
            <Button className={styles.submit}
                type="primary"
                shape="round"
                size="large"
                block='true'
                onClick={sentResult}
            >提 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 交</Button>
        </div>

    )
})
export default Submit