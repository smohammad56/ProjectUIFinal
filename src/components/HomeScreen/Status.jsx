import React, {useEffect, useState} from 'react';
import Toggle from './Toggle';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";

function Status(props) {

const [alert, setAlert] = useState('Looks like a clear day!');

const toggleContentModal = () => {
        props.setShowModal(false);
        props.setContent('Welcome, User!')
    }

    const updateContent = () => {
        props.setShowModal(false)
        props.setContent(props.content);
    };

useEffect(() => {
  if (props.weather == 'Rainy') {
      setAlert('Watch out for rain! Close your windows!')
  }
  else if (props.weather == 'Snowy'){
    setAlert('Brr...Its going to snow! Make sure to disable your windows!')

  }  

    else {
      setAlert('Looks like a clear day!')
  }

}, [props.weather]);




  return (
    <div className="row g-2">
    <div className="col-12">
      <div className="rounded border p-3"><Toggle toggleMode={props.toggleMode} mode={props.mode} setMode={props.setMode}/></div>
    </div>
    {/* <div className="col-12">
      <div className="rounded border p-3">Last Updated: {props.dt} </div>
    </div> */}
    <div className="col-12">
      <div className="rounded border p-3">{alert}</div>
    <div className="col-12">
      <div className="rounded border p-3 mt-2"> 
      <div className="d-flex flex-column text-center mt-3">
            <button className="mb-2 btn btn-primary" onClick={()=>props.setShowModal(true)}>Personalize Content</button>
              <Modal show={props.showModal} onHide={toggleContentModal}>
                    <ModalHeader closeButton><ModalTitle>Personalize Screen Content</ModalTitle></ModalHeader>
                    <ModalBody>
                        <p>Enter your custom welcome message: </p>
                        <input className="w-100" onChange={(e) => props.setContent(e.target.value)} />
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={updateContent}>
                            Okay
                        </button>
                        <button className="btn btn-secondary" onClick={toggleContentModal}>
                            Close
                        </button>
                    </ModalFooter>
                </Modal>
       </div>
      
    </div>
  </div>
  </div>
  </div>


  );
}

export default Status;
