import Form from 'react-bootstrap/Form';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";

function SetDrop(props) {
   
  return (
    <Dropdown>
        <DropdownToggle className="w-100 mb-4">
            {props.seasonVal == '' ? 'Select Season' : props.seasonVal }
                </DropdownToggle>
                <DropdownMenu className="w-100">
                    <DropdownItem onClick={() => props.setseasonVal("Fall")}>Fall</DropdownItem>
                    <DropdownItem onClick={() => props.setseasonVal("Winter")}>Winter</DropdownItem>
                    <DropdownItem onClick={() => props.setseasonVal("Spring")}>Spring</DropdownItem>
                    <DropdownItem onClick={() => props.setseasonVal("Summer")}>Summer</DropdownItem>
                </DropdownMenu>
            </Dropdown>
  );
}

export default SetDrop;