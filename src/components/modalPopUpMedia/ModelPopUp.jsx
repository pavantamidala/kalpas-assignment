import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "70%",
        height: "70%",

    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function ModalApp(props) {
   

    var subtitle;
    // function openModal() {
    //     props.setShow(true);
    // }

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
                <iframe style={{width:"100%",height:"100%"}} src={props.link} title={props.link} ></iframe>

            </Modal>

        </div>
    );
}


export default ModalApp