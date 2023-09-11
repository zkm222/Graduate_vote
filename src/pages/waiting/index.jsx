import Header from "../../compoments/vote/header"
import axios from "axios";
import { Component } from 'react';
class Waiting extends Component {
    componentDidMount(){
        axios({
            method:'post',//请求方式
            url:'http://43.140.197.15:8080/admin/getVoteResult',//请求地址
            params:'',//和url一起发送的数据（如get请求）
            data:'',//必要参数，
            // 自定义请求头
            }).then(
            res=>{
                 if(res.data.msg == 'success'){
                 }
                 else{
                    console.log('failed')
                 }
            })
        setInterval(() => {
            axios({
                method:'post',//请求方式
                url:'http://43.140.197.15:8080/admin/getVoteResult',//请求地址
                params:'',//和url一起发送的数据（如get请求）
                data:'',//必要参数，
                // 自定义请求头
                }).then(
                res=>{
                     if(res.data.msg == 'success'){
                     }
                     else{
                        console.log('failed')
                     }
                    this.setState({
                        student:res.data.data.students
                    })
                })
        }, 5000);
    }
    render() {
        return (
            <div>
            <Header></Header>
            <h2>投 票 完 成 ， 请 耐 心 等 待 投 票 结 果{'\u00A0\u00A0\u00A0'}.{'\u00A0\u00A0\u00A0'}.{'\u00A0\u00A0\u00A0'}. </h2>
        </div>
        );
    }
}
export default Waiting