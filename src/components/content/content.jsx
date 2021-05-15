import React from 'react'
import ToggleButtons from '../sidebar/ToggleButtons'
import ListView from '../listview/ListView'
import CardView from '../cardview/CardView'
import useFetch from '../../hooks/useFetch'
import "./content.css"
function Content(props) {
    useFetch(props.offset,props.setData)
    return (
        <div className="container">
            <div className="sidebar">
            <ToggleButtons setListView={props.setListView} />
            </div>
            <div className="main">

             {
                    props.listView ? <ListView setData={props.setData} data={props.data} /> : <CardView setData={props.setData} data={props.data} />
            } 
                
                
            </div>
        </div>
    )
}

export default Content
