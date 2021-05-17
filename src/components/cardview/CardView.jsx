import React,{useState} from 'react'
import './CardView.css'
import { IconContext } from "react-icons";
import { GiCancel} from 'react-icons/gi'
import ModalApp from '../modalPopUpMedia/ModelPopUp';

function CardView(props) {
    const [show, setShow] = useState(false)
    const [link, setLink] = useState("") 
    function removePost(id) {
        let newData = props.data.filter((obj) => {
            return obj.id !== id
        })
        props.setData(newData)
    }
    function clickHandle(l) {
        setShow(true)

        setLink(l)
    }
    return (
        <div className="card-container">
            {!props.data&& <h3>Loading...</h3>}
    
            { props.data &&
                props.data.map((obj) => {
                    return (
                        <div className="card-view" key={obj.id}>
                            <div className="remove-card-post">
                                <IconContext.Provider value={{size:"20px"}}>
                                    <GiCancel onClick={(e) => removePost(obj.id)} />
                                </IconContext.Provider>
                            </div>
                            
                            <h5 onClick={(e) => clickHandle(obj.link)} className="card-title"> {obj.title} </h5>
                            <p onClick={(e) => clickHandle(obj.link)} className="card-summary">{obj.summary} </p>
                            <span onClick={(e) => clickHandle(obj.link)} className="card-date"> {obj.published} </span>
                            <img onClick={(e) => clickHandle(obj.link)} className="card-image" src="https://via.placeholder.com/320x240?text=Placeholder" alt="" />
                            
                        </div>
                    )
                })
            }
            {show && <ModalApp show={show} setShow={setShow} link={link} />}
        </div>
    )
}

export default React.memo(CardView)