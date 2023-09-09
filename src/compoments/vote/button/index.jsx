import React from "react"
import {Button} from 'antd'
import './button.moudle.css'
const Submit=(()=>{
    return(
        <div className="submitContainer">
            <Button className="submit"
            type="primary" 
            shape="round" 
            size="large" 
            block='true'
           >提 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 交</Button>
        </div>
        
    )
})
export default Submit