import React from 'react'
import Modal from 'react-modal';
import Profile from '../sidebar/Profile';
import Feedback from "../sidebar/Feedback";
import "./FormModel.css";
import FormComp from './Form'
// const customStyles = {
// content: {
//     top: '50%',
//         left: '70%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         width: "70%",
//         height: "70%",
// width: "150%",
// height: "100%",
// background:"#EBF2F7",
// boxShadow:"0px 8px 28px - 6px rgba(24, 39, 75, 0.12), 0px 18px 88px - 4px rgba(24, 39, 75, 0.14)",
// borderRadius: "0px 32px 32px 0px"
//     }
// };
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
    content: {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '20%',
        bottom: '0',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
    }
}


function FormModel(props) {
    var subtitle;
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        props.setShow(false);
    }
    return (
        <div>
            <Modal
                isOpen={props.show}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <div ref={_subtitle => (subtitle = _subtitle)}>
                </div>
                <div className="side-model">
                    <div className="sidebar-container-model">
                        <div className="profile-container">

                            <Profile />
                        </div>

                        <div className="feedback-container">
                            <div className="feedback">
                                <h3> Have a Feedback? </h3>
                                <button onClick={closeModal} className="feedback-btn"> We're Listening!  </button>

                            </div>
                        </div>
                    </div>
                    <div className="form-container-model">
                        <FormComp />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default FormModel
