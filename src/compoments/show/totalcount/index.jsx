import React from "react"
import './totalcount.moudle.css'
var count = {
    total: 10,
    now: 5
}
const Totalcount = (() => {
    return (
        <div>
            <div className="total">当 前 投 票 人 数 :{'\u00A0\u00A0\u00A0'}<span className="count"> {count.now} / {count.total}</span></div>
        </div>

    )
})
export default Totalcount