import React from "react"
import { Button } from 'antd'
import styles from './button.module.css'
import axios from "axios"
const Submit = ((props) => {
    const sentResult=()=>{
        if(props.check!=props.limit){
            alert(`每人需要投${props.limit}票`)
        }
        else{
            if(confirm("请检查当前投票结果，是否提交？")==true){
                axios({
                method:'post',//请求方式
                url:'http://43.140.197.15:8080/vote',//请求地址
                params:'',//和url一起发送的数据（如get请求）
                data:props.list,//必要参数，
                // 自定义请求头
                }).then(
                res=>{
                    console.log(res)
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