import React,{ Component } from 'react';
import {Checkbox} from 'antd'
import Submit from '../button';
import styles from './form.module.css'
var student=[
    {"name":'zkm',"id":"1","school":"信息科学与技术学院"},
    {"name":'dcs',"id":"2","school":"信科"},
    {"name":'wyy',"id":"3","school":"环境"},
    {"name":'zxy',"id":"4","school":"信科"},
    {"name":'pyf',"id":"5","school":"音乐"},
    {"name":'tlq',"id":"6","school":"信科"},
    {"name":'zxy',"id":"4","school":"信科"},
    {"name":'pyf',"id":"5","school":"音乐"},
    {"name":'tlq',"id":"6","school":"信科"},
    {"name":'zxy',"id":"4","school":"信科"},
    {"name":'pyf',"id":"5","school":"音乐"},
    {"name":'tlq',"id":"6","school":"信科"}
  ]
class Form extends Component {
    state={
      student_list:[],
      checked_num:0
    }
    checked_num=e=>{
      const q=e.target
      if(e.target.checked==false){
        console.log(1)
        let list=this.state.student_list
        let value=e.target.dataset.id
        list.splice(list.indexOf(value),1)
        this.setState((state)=>{
          return{
          student_list:list,
          checked_num:state.checked_num-1
          }
        },()=>{console.log(this.state.student_list)})
      }else if(this.state.checked_num>3){
        console.log("选人到达上限")
        e.target.checked=false
      }else{
        this.choose(q)
      }
    }
    choose=q=>{
      let list=this.state.student_list
      console.log(this.state.checked_num)
      list.push(q.dataset.id)
      this.setState((state)=>{
        return{
        student_list:list,
        checked_num:state.checked_num+1
        }
      },()=>{console.log(this.state.student_list)})
    }
    render() {
      return (
        <div>
          <h1 className='toptitle'>研 究 生 投 票 系 统</h1>
          {/* 表头 */}
          <table>
              <tr>
                  <th style={{WebkitBorderTopLeftRadius:15}}>是否同意</th>
                  <th>序号</th>
                  <th>姓名</th>
                  <th>性别</th>
                  <th>政治面貌</th>
                  <th style={{WebkitBorderTopRightRadius:15}}>学院</th>
              </tr>
            {student.map(item=>{
              return(
                <tr className={styles.student}>
                  <td>
                    <input type='checkbox' name='student' key={item.id} onClick={this.checked_num} data-id={item.id}/>
                  </td>
                  <td>
                    <span className={styles.message}>{item.id} </span>
                  </td>
                  <td>
                    <span className={styles.message}>{item.name} </span>
                  </td>
                  <td>
                    <span className={styles.message}>{item.sex} </span>
                  </td>
                  <td>
                    <span className={styles.message}>{item.identity} </span>
                  </td>
                  <td>
                    <span className={styles.message}>{item.school} </span>
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