import React from "react"
import { Checkbox } from 'antd'
import Submit from '../../vote/button';
import './result.moudle.css'

var student = [
    { "rank": "1", "id": "11", "sex": "女", "vote": "8", "identity": "预备党员", "name": '赵梓欣', "school": "心理学院" },
    { "rank": "2", "id": "1", "sex": "男", "vote": "7", "identity": "预备党员", "name": '李益方', "school": "数学与统计学院" },
    { "rank": "3", "id": "3", "sex": "女", "vote": "7", "identity": "共青团员", "name": '王曼茜', "school": "美术学院" },
    { "rank": "4", "id": "7", "sex": "男", "vote": "6", "identity": "预备党员", "name": '殷琪超', "school": "美术学院" },
    { "rank": "5", "id": "5", "sex": "女", "vote": "5", "identity": "共青团员", "name": '赫华', "school": "地理科学学院" },
    { "rank": "6", "id": "2", "sex": "女", "vote": "5", "identity": "预备党员", "name": '王赫奇', "school": "文学院" },
    { "rank": "7", "id": "9", "sex": "女", "vote": "3", "identity": "预备党员", "name": '冯荃', "school": "心理学院" },
    { "rank": "8", "id": "8", "sex": "女", "vote": "3", "identity": "预备党员", "name": '盛美玲', "school": "政法学院" },
    { "rank": "9", "id": "6", "sex": "男", "vote": "3", "identity": "预备党员", "name": '张传民', "school": "美术学院" },
    { "rank": "10", "id": "10", "sex": "女", "vote": "2", "identity": "共青团员", "name": '杨雪娇', "school": "马克思主义学部" },
    { "rank": "11", "id": "12", "sex": "女", "vote": "1", "identity": "共青团员", "name": '杨笑雨', "school": "外国语学院" },
    { "rank": "12", "id": "4", "sex": "女", "vote": "1", "identity": "预备党员", "name": '殷子惠', "school": "地理科学学院" }
]

const Result = (() => {
    return (
        <div>
            <table>
                <tr>
                    <th style={{ WebkitBorderTopLeftRadius: 15 }}>再次投票选择</th>
                    <th>排名</th>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>政治面貌</th>
                    <th style={{ WebkitBorderTopRightRadius: 15 }}>学院</th>
                    <th>票数</th>
                </tr>
                {student.map(item => {
                    return (
                        <tr className={styles.student}>
                            <td>
                                <input type='checkbox' name='student' key={item.id} data-id={item.id} />
                            </td>
                            <td>
                                <span className={styles.message}>{item.rank} </span>
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
                            <td>
                                <span className={styles.message}>{item.vote} </span>
                            </td>
                        </tr>
                    )
                })}
                <Submit></Submit>
            </table>
        </div>
    )
})
export default Result