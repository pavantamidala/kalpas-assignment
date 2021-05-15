import React from 'react'
// import './ListView.css'
function ListView(props) {
    console.log("list view")
    console.log(props.data.length)
    return (
        <div className="list-container">
           
            
            { props.data.length  &&
                props.data.map((obj)=>{
                    return (
                        <div className="single-list" key={obj.id}>
                            <div className="list">
                            {/* <h5 className="title"> {obj.title} </h5> */}
                            <p className="summary"> {obj.summary} </p>
                            <span className="date"> {obj.published} </span>
                            </div>
                            <div className="close"> <button>Close</button> </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(ListView)
