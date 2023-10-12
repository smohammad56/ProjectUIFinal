import React, { useEffect, useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";

const Settings = (props) => {
    const [toggle, setToggle] = useState(true);
    const [weatherName, setWeatherName] = useState('Sunny');
    const [showModal, setShowModal] = useState(false);
  

    const toggleMode = () => {
        setToggle(!toggle);
    };

    const toggleContentModal = () => {
        setShowModal(false);
        props.setContent('Welcome, User!')
    }

    const updateContent = () => {
        setShowModal(false)
        props.setContent(props.content);
    };

    useEffect(() => {
        if (toggle) {
            props.setMode("On");
        } else {
            props.setMode("Off");
        }
    }, [toggle]);

    useEffect(() => {
        setWeatherName(props.weather);
    }, [props.weather]);

    return (
        <div>
        <div className="card col-3" style={{backgroundColor: '#F5FBFF', borderRadius: '35px', marginLeft: '15px' }}>
        <div className="card-body p-4">
            <div className="d-flex">
                <h6 className="flex-grow-1">Input Test</h6>
            </div>

            <div className="d-flex flex-column text-center mt-3">
            <button className="mb-2" onClick={()=>setShowModal(true)}>Change Content</button>
            <button onClick={toggleMode}  className="mb-2">Light Mode: {props.mode}</button>
            <Dropdown>
                <DropdownToggle className="w-100">
                    Weather: { weatherName }
                </DropdownToggle>
                <DropdownMenu className="w-100">
                    <DropdownItem onClick={() => props.setWeather("Sunny")}>Sunny</DropdownItem>
                    <DropdownItem onClick={() => props.setWeather("Rainy")}>Rainy</DropdownItem>
                    <DropdownItem onClick={() => props.setWeather("Snowy")}>Snowy</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            </div>
        </div>
        </div>
        <Modal show={showModal} onHide={toggleContentModal}>
            <ModalHeader closeButton><ModalTitle>Change Welcome Content</ModalTitle></ModalHeader>
            <ModalBody>
                <p>Enter your custom welcome message: </p>
                <input className="w-100" onChange={(e) => props.setContent(e.target.value)} />
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-secondary" onClick={toggleContentModal}>
                    Close
                </button>
                <button className="btn btn-primary" onClick={updateContent}>
                    Okay
                </button>
            </ModalFooter>
        </Modal>
    </div>
    );
};

export default Settings;