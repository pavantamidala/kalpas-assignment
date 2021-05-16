import React from 'react'
import './CardView.css'
import { IconContext } from "react-icons";
import { GiCancel} from 'react-icons/gi'

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
                            <div className="remove-card-post">
                                <IconContext.Provider value={{size:"20px"}}>
                                    <GiCancel onClick={(e) => removePost(obj.id)} />
                                </IconContext.Provider>
                            </div>
                            
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