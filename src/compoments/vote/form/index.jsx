import React, { Component } from 'react';
import { Checkbox } from 'antd'
import Submit from '../button';
import styles from './form.module.css'
import axios from 'axios'

var checkLimit = 3;

class Form extends Component {
  state = {
    student_list: [],
    checked_num: 0,
    students:[
      { "id": "1", "sex": "男", "identity": "预备党员", "name": '李益方', "school": "数学与统计学院" },
      { "id": "2", "sex": "女", "identity": "预备党员", "name": '王赫奇', "school": "文学院" },
      { "id": "3", "sex": "女", "identity": "共青团员", "name": '王曼茜', "school": "美术学院" },
      { "id": "4", "sex": "女", "identity": "预备党员", "name": '殷子惠', "school": "地理科学学院" },
      { "id": "5", "sex": "女", "identity": "共青团员", "name": '赫华', "school": "地理科学学院" },
      { "id": "6", "sex": "男", "identity": "预备党员", "name": '张传民', "school": "美术学院" },
      { "id": "7", "sex": "男", "identity": "预备党员", "name": '殷琪超', "school": "美术学院" },
      { "id": "8", "sex": "女", "identity": "预备党员", "name": '盛美玲', "school": "政法学院" },
      { "id": "9", "sex": "女", "identity": "预备党员", "name": '冯荃', "school": "心理学院" },
      { "id": "10", "sex": "女", "identity": "共青团员", "name": '杨雪娇', "school": "马克思主义学部" },
      { "id": "11", "sex": "女", "identity": "预备党员", "name": '赵梓欣', "school": "心理学院" },
      { "id": "12", "sex": "女", "identity": "共青团员", "name": '杨笑雨', "school": "外国语学院" }
    ]
  }
  componentDidMount(){
    //设置投票限制人数
    // axios({
    //   method:'post',//请求方式
    //   url:'http://43.140.197.15:8080/admin/setMsg',//请求地址
    //   params:'',//和url一起发送的数据（如get请求）
    //   data:JSON.stringify({limit:5,teachers:10,students:5}),//必要参数，
    //   // 自定义请求头
    //   headers: {'Content-Type':'application/json'},
    // }).then(
    //   res=>{
    //     console.log(res)
    //     // this.setState({
    //     //   data:res.data.data
    //     // })
    //   }
    // )
    axios.get('http://43.140.197.15:8080/users').then(res=>{
      console.log(res.data.data.students,"====")
      checkLimit=res.data.data.limit
      console.log(checkLimit)
      this.setState((state) => {
        return {
          students:res.data.data.students
        }
      }, () => { console.log(this.state.students) })
    })
  }
  checked_num = e => {
    const q = e.target
    if (e.target.checked == false) {
      console.log(1)
      let list = this.state.student_list
      let value = e.target.dataset.id
      list.splice(list.indexOf(value), 1)
      this.setState((state) => {
        return {
          student_list: list,
          checked_num: state.checked_num - 1
        }
      }, () => { console.log(this.state.student_list) })
    } else if (this.state.checked_num >=checkLimit) {
      console.log("选人到达上限")
      e.target.checked = false
    } else {
      this.choose(q)
    }
  }
  choose = q => {
    let list = this.state.student_list
    console.log(this.state.checked_num)
    list.push(q.dataset.id)
    this.setState((state) => {
      return {
        student_list: list,
        checked_num: state.checked_num + 1
      }
    }, () => { console.log(this.state.student_list) })
  }
  render() {
    return (
      <div className={styles.form}>
        <h1 className={styles.toptitle}>候 选 人 名 单</h1>
        <div className={styles.limit}>每人限投 <span className={styles.limitmark}>{checkLimit}</span> 票</div>
        {/* 表头 */}
        <table>
          <tr>
            <th style={{ WebkitBorderTopLeftRadius: 15 }}>是否同意</th>
            <th>序号</th>
            <th>姓名</th>
            <th>性别</th>
            <th>政治面貌</th>
            <th style={{ WebkitBorderTopRightRadius: 15 }}>学院</th>
          </tr>
          {this.state.students.map((item,index) => {
            let sex='男'
            if(item.voteGender==0){
              sex='女'
            }
            console.log(index)
            return (
              <tr className={styles.student}>
                <td>
                  <input type='checkbox' name='student' key={item.voteId} onClick={this.checked_num} data-id={item.voteId} />
                </td>
                <td>
                  <span className={styles.message}>{index+1} </span>
                </td>
                <td>
                  <span className={styles.message}>{item.voteName} </span>
                </td>
                <td>
                  <span className={styles.message}>{sex} </span>
                </td>
                <td>
                  <span className={styles.message}>{item.votePoli} </span>
                </td>
                <td>
                  <span className={styles.message}> {item.voteInsti}</span>
                </td>
              </tr>
            )
          })}
          <Submit></Submit>
        </table>

      </div>
    );
  }
}
export default Form