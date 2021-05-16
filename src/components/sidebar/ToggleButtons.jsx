import React from 'react'
import './ToggleButtons.css'
import {RiGridFill} from 'react-icons/ri'
import { BsListUl} from 'react-icons/bs';
import { IconContext } from "react-icons";
function ToggleButtons(props) {
    console.log("buttons")
  let coloredButton = props.listView ?"green":""
  let coloredButton2 =  props.listView ?"":"green"
    return (
      <div className="icons-container">
          <h3> View Toggle </h3>
        <div className="icons">
            <IconContext.Provider value={{ size:"25px" ,color:coloredButton2 }}>
            <RiGridFill onClick={(e) => { props.setListView(false) }} /> 
            </IconContext.Provider> 
          <IconContext.Provider value={{ size: "25px", color: coloredButton }}>
            <BsListUl onClick={(e)=>{props.setListView(true)}} />
            </IconContext.Provider>
        </div>
      </div>
        
    )
}

export default React.memo(ToggleButtons)
