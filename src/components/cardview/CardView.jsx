import React from 'react'
import './CardView.css'
function CardView(props) {
    console.log("card view")
    let random = 0
    function removePost(id) {
        let newData = props.data.filter((obj) => {
            return obj.id !== id
        })
        props.setData(newData)
    }
    return (
        <div className="card-container">
    
            { props.data &&
                props.data.map((obj) => {
                    return (
                        <div className="card" key={obj.id}>
                            <button onClick={(e) => removePost(obj.id)}>Remove</button>
                            <h5 className="card-title"> {obj.title} </h5>
                            <p className="card-summary">{obj.summary} </p>
                            <span className="card-date"> {obj.published} </span>
                            <img className="card-image" src={"https://loremflickr.com/320/240?random=" + random} alt="" />
                            <p className="random"> {random = random+1} </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default React.memo(CardView)