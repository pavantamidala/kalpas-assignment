import React,{useState} from 'react'
import './ListView.css';
import { GiCancel } from 'react-icons/gi'
import {IconContext} from 'react-icons';
import ModalApp from '../modalPopUpMedia/ModelPopUp';

function ListView(props) {
    const [show,setShow] = useState(false)
    const [link,setLink] = useState("")
    function removePost(id){
        let newData =  props.data.filter((obj)=>{
            return obj.id !== id
        })
        props.setData(newData)
    }
   
    function clickHandle(l){
        setShow(true)
        
         setLink(l)
    }
    return (
        <div  className="list-container">
{!props.data&& <h3>Loading...</h3>}

            { props.data &&
                props.data.map((obj) => {
                    return (
        
                        <div className="single-lists" key={obj.id}>
                            <div className="s-list" onClick={(e) => clickHandle(obj.link)}>
                                <img className="list-image" src="https://via.placeholder.com/320x240?text=Placeholder" alt="" />
                                <div className="list-content">
                                <h5 className="list-title"> {obj.title} </h5>
                                <p className="list-summary" > {obj.summary} </p>
                                <span className="list-date"> {obj.published} </span>
                                </div>
                            </div>
                            <div className="close">
                                <IconContext.Provider value={{ size: "20px" }}>
                                    <GiCancel onClick={(e) => removePost(obj.id)} />
                                </IconContext.Provider> </div>
                        </div>
                        
                    )
                })
            }
          {show && <ModalApp show={show} setShow={setShow} link={link} />}
               
             
           
            
        </div>
    )
}



export default React.memo(ListView)
