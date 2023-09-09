import React from "react"
import { Button } from 'antd'
import styles from './button.module.css'
const Submit = (() => {
    return (
        <div className={styles.submitContainer}>
            <Button className={styles.submit}
                type="primary"
                shape="round"
                size="large"
                block='true'
            >提 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 交</Button>
        </div>

    )
})
export default Submit