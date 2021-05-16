import React from 'react'
import ToggleButtons from '../sidebar/ToggleButtons'
import ListView from '../listview/ListView'
import CardView from '../cardview/CardView'
import useFetch from '../../hooks/useFetch'
import "./content.css";
import Profile from '../sidebar/Profile';
import Feedback from "../sidebar/Feedback";
import Pagination from "react-js-pagination";

function Content(props) {
    useFetch(props.offset,props.setData)
    return (
        <div className="container">
            <div className="sidebar">
                <div className="profile-container">
                <Profile />
                </div>
                <div className="buttons-container">
            <ToggleButtons listView={props.listView} setListView={props.setListView} />
                </div>
                <div className="feedback-container">
                <Feedback />
                </div>
            </div>
            <div className="main">

             {
                    props.listView ? <ListView setData={props.setData} data={props.data} /> : <CardView setData={props.setData} data={props.data} />
            } 
            
            </div>
            <div className="pagination-container">

            <Pagination
                activePage
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                itemClass="page-item"
                linkClass="page-link"
                />
                </div>
        </div>
    )
}

export default Content
