import React from 'react'
import { useState } from 'react'
import './Feedback.css'
import FormModel from '../form model/FormModel'
function Feedback() {
    const [show,setShow] = useState(false)
    function clickHandle(){
        console.log("clicked")
        setShow((prev) => !show)
    }
    return (
        <div className="feedback">
            <h3> Have a Feedback? </h3>
            <button onClick={clickHandle} className="feedback-btn"> We're Listening!  </button>
            {show && <FormModel show={show} setShow={setShow} />}
        </div>
    )
}

export default Feedback
