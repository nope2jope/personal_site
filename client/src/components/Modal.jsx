import React from "react";
import SwiperComponent from "./SwiperComponent";

const Modal = ({ data, isVisible, onClick }) => {

            return <div id={data.modal} className="modal" style={{ display: isVisible ?  'block' : 'none'}}>
                <SwiperComponent data={data}/>
                <div className="row center">
                    <div className="modal-close center">
                        <p onClick={onClick} >CLOSE</p>
                    </div>
                </div>
            </div>
    }


export default Modal;