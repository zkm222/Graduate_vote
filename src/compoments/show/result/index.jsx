import React from "react"
import { Checkbox, message } from 'antd'
import Revote from '../button';
import styles from './result.module.css'
import axios from "axios";
import { Component } from 'react';

// var student = []

class Result extends Component {
    state = {
        student: [
            { voteId: 2, voteName: 'lisi', voteGender: 0, votePoli: 'test', voteInsti: 'test', votePoll: 5, voteInstiSort: '1', voteInterSort: '2' }
        ],
        pre: [],
        revoteResult: {},
        preRevoteResult: {},
        determineNum: 1,
        message: "",
        title: "当前投票"
    }
    componentDidMount() {
        axios({
            method: 'post',//请求方式
            url: 'http://210.47.29.53:8081/admin/getVoteResult',//请求地址
            params: '',//和url一起发送的数据（如get请求）
            data: '',//必要参数，
            // 自定义请求头
        }).then(
            res => {
                if (res.data.msg == 'success') {
                }
                else {
                    console.log('failed')
                }
                this.setState({
                    student: res.data.data.students,
                    determineNum: res.data.data.determineNum,
                    pre: res.data.data.pre == null ? [] : res.data.data.pre,
                    revoteResult: res.data.data.revoteResult == null ? {} : res.data.data.revoteResult,
                    preRevoteResult: res.data.data.preRevoteResult == null ? {} : res.data.data.preRevoteResult,
                    message: `正在投票第 ${this.state.determineNum} 名至第 ${(this.state.determineNum + this.state.student.length - 1)} 名`
                })
                if (res.data.data.pre != null) {
                    this.setState({
                        title: "投票结果",
                        message: ""
                    })
                }
                // console.log(this.state.revoteResult);
            })
        setInterval(() => {
            axios({
                method: 'post',//请求方式
                url: 'http://210.47.29.53:8081/admin/getVoteResult',//请求地址
                params: '',//和url一起发送的数据（如get请求）
                data: '',//必要参数，
                // 自定义请求头
            }).then(
                res => {
                    if (res.data.msg == 'success') {
                    }
                    else {
                        console.log('failed')
                    }
                    this.setState({
                        student: res.data.data.students,
                        determineNum: res.data.data.determineNum,
                        pre: res.data.data.pre == null ? [] : res.data.data.pre,
                        revoteResult: res.data.data.revoteResult == null ? {} : res.data.data.revoteResult,
                        preRevoteResult: res.data.data.preRevoteResult == null ? {} : res.data.data.preRevoteResult,
                        message: `正在投票第 ${this.state.determineNum} 名至第 ${(this.state.determineNum + this.state.student.length - 1)} 名`
                    })
                    if (res.data.data.pre != null) {
                        this.setState({
                            title: "投票结果",
                            message: ""
                        })
                    }
                    // console.log(this.state.revoteResult);
                })
        }, 5000);
    }
    render() {
        var i = 0;
        var j = 0;
        return (
            <div className={styles.result}>
                <h1>{this.state.title}</h1>
                <h2 className={styles.tip}>{this.state.message}</h2>
                <table>
                    <tr className={styles.tablehead}>
                        <th style={{ WebkitBorderTopLeftRadius: 15 }}>排名</th>
                        <th style={{ minWidth: 260 }}>学院</th>
                        <th style={{ minWidth: 220 }}>专业</th>
                        <th style={{ minWidth: 80 }}>姓名</th>
                        <th>性别</th>
                        <th style={{ minWidth: 140 }}>政治面貌</th>
                        <th>学院排序</th>
                        <th>面试序号</th>
                        <th style={{ WebkitBorderTopRightRadius: 15 }}>票数</th>
                    </tr>
                    {this.state.student.map(item => {
                        i++
                        // if (item.votePoll == 0 && i > 10) return;
                        let sex = '男'
                        if (item.voteGender == 0) {
                            sex = '女'
                        }
                        return (
                            <tr className={styles.student}>
                                {/* <td>
                                    <input type='checkbox' name='student' key={item.id} data-id={item.id} />
                                </td> */}
                                <td>
                                    <span className={styles.message}>{i} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.voteInsti} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.voteMajor} </span>
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
                                    <span className={styles.message}>{item.voteInstiSort} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>({item.voteInterSort}) </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.votePoll} </span>
                                </td>
                            </tr>
                        )
                    })}
                    {this.state.pre.map(item => {
                        i++
                        let sex = '男'
                        if (item.voteGender == 0) {
                            sex = '女'
                        }
                        return (
                            <tr className={styles.student}>
                                {/* <td>
                                    <input type='checkbox' name='student' key={item.id} data-id={item.id} />
                                </td> */}
                                <td>
                                    <span className={styles.message}>{i} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.voteInsti} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.voteMajor} </span>
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
                                    <span className={styles.message}>{item.voteInstiSort} </span>
                                </td>
                                <td>
                                    <span className={styles.message}>({item.voteInterSort}) </span>
                                </td>
                                <td>
                                    <span className={styles.message}>{item.votePoll} </span>
                                </td>
                            </tr>
                        )
                    })}
                    <div className={styles.blank}></div>
                </table>

                {/* {Object.entries(this.state.revoteResult).forEach(([key, value]) => { */}
                {Object.keys(this.state.revoteResult).map((v, i) => {
                    // console.log(key, value);
                    i = 0;
                    j++;
                    // console.log(v)
                    return (
                        <div>
                            <h2 style={{ marginTop: 80 }}>第 {j} 次重投</h2>
                            <table>
                                <tr className={styles.tablehead}>
                                    <th style={{ WebkitBorderTopLeftRadius: 15 }}>排名</th>
                                    <th style={{ minWidth: 260 }}>学院</th>
                                    <th style={{ minWidth: 220 }}>专业</th>
                                    <th style={{ minWidth: 80 }}>姓名</th>
                                    <th>性别</th>
                                    <th style={{ minWidth: 140 }}>政治面貌</th>
                                    <th>学院排序</th>
                                    <th>面试序号</th>
                                    <th style={{ WebkitBorderTopRightRadius: 15 }}>票数</th>
                                </tr>
                                {this.state.revoteResult[v].map(item => {
                                    // console.log(item)
                                    i++;
                                    if (item.votePoll == 0 && i > 10) return;
                                    let sex = '男';
                                    if (item.voteGender == 0) {
                                        sex = '女';
                                    }
                                    return (
                                        <tr className={styles.student}>
                                            <td>
                                                <span className={styles.message}>{i} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.voteInsti} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.voteMajor} </span>
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
                                                <span className={styles.message}>{item.voteInstiSort} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>({item.voteInterSort}) </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.votePoll} </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    )
                })}

                {Object.keys(this.state.preRevoteResult).map((v, i) => {
                    // console.log(key, value);
                    i = 0;
                    j++;
                    // console.log(v)
                    return (
                        <div>
                            <h2 style={{ marginTop: 80 }}>第 {j} 次重投【候补人选】</h2>
                            <table>
                                <tr className={styles.tablehead}>
                                    <th style={{ WebkitBorderTopLeftRadius: 15 }}>排名</th>
                                    <th style={{ minWidth: 260 }}>学院</th>
                                    <th style={{ minWidth: 220 }}>专业</th>
                                    <th style={{ minWidth: 80 }}>姓名</th>
                                    <th>性别</th>
                                    <th style={{ minWidth: 140 }}>政治面貌</th>
                                    <th>学院排序</th>
                                    <th>面试序号</th>
                                    <th style={{ WebkitBorderTopRightRadius: 15 }}>票数</th>
                                </tr>
                                {this.state.preRevoteResult[v].map(item => {
                                    // console.log(item)
                                    i++;
                                    if (item.votePoll == 0 && i > 10) return;
                                    let sex = '男';
                                    if (item.voteGender == 0) {
                                        sex = '女';
                                    }
                                    return (
                                        <tr className={styles.student}>
                                            <td>
                                                <span className={styles.message}>{i} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.voteInsti} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.voteMajor} </span>
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
                                                <span className={styles.message}>{item.voteInstiSort} </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>({item.voteInterSort}) </span>
                                            </td>
                                            <td>
                                                <span className={styles.message}>{item.votePoll} </span>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Result
