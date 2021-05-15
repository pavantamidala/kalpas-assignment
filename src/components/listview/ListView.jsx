import React from 'react'
import './ListView.css';
function ListView(props) {
    console.log("list view")
    console.log(props.data.length)
    let random = 1
    function removePost(id){
        let newData =  props.data.filter((obj)=>{
            return obj.id !== id
        })
        props.setData(newData)
    }
    return (
        <div className="list-container">


            { props.data &&
                props.data.map((obj) => {
                    return (
                        <div className="single-list" key={obj.id}>
                            <div className="list">
                                <img className="image" src={"https://loremflickr.com/320/240?random="+random} alt="" />
                                <div className="list-content">
                                <h5 className="title"> {obj.title} </h5>
                                <p className="summary" > {obj.summary} </p>
                                <span className="date"> {obj.published} </span>
                                </div>
                            </div>
                            <div className="close"> <button onClick={(e) => removePost(obj.id)}>Close</button> </div>
                            <p className="none"> {random = random + 1} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ListView)
