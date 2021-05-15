import React from 'react'

function ToggleButtons(props) {
    console.log("buttons")
    return (
        <div>
            <button onClick={(e)=>{props.setListView(false)}} >card</button>
            <button onClick={(e)=>{props.setListView(true)}} > list </button>
        </div>
    )
}

export default React.memo(ToggleButtons)
