import React,{useEffect} from 'react'
import ToggleButtons from '../sidebar/ToggleButtons'
import ListView from '../listview/ListView'
import CardView from '../cardview/CardView'
import useFetch from '../../hooks/useFetch'
import "./content.css";
import Profile from '../sidebar/Profile';
import Feedback from "../sidebar/Feedback";
import ReactPaginate from 'react-paginate';
import axios from 'axios'

function Content(props) {
    useFetch(props.offset,props.setData)
    useEffect(() => {

        axios.get(`https://api.first.org/data/v1/news?limit=8&offset=${props.offset}`).then((res) => {
            
            console.log(res.data.data)
            props.setData(res.data.data)
        })
    }, [props.offset, props.setData])
    function handleChange(obj){
        console.log(obj.selected)
    
        props.setOffSet((prev) => obj.selected * 5)
    }
    return (
        <div className="content-container">
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
            <div className="main-content">

             {
                    props.listView ? <ListView setData={props.setData} data={props.data} /> : <CardView setData={props.setData} data={props.data} />
            } 
            
            </div>
            <div className="pagination-container">

                <ReactPaginate
                pageCount={76}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    onPageChange={handleChange}
                    containerClassName={'pagination'}
                    activeClassName={"active-tab"}
                />
                </div>
        </div>
    )
}

export default Content
