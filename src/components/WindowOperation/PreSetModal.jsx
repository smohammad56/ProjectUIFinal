import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SetDrop from './SetDrop';
import SetTintDrop from './SetTintDrop';



function PreSetModal(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [tintOp, settintOp] = useState('');
  const [temp, setTemp] = useState('');
  const [tintLvl, settintLvl] = useState('');
  const pass = () => { if (props.seasonVal == 'Fall')
  {
      props.setFall({tintOp, temp, tintLvl});
  } else if (props.seasonVal == 'Winter')
  {
      props.setWinter({tintOp, temp, tintLvl});
  }
  else if (props.seasonVal == 'Spring')
  {
    props.setSpring({tintOp, temp, tintLvl});
  } else if (props.seasonVal == 'Summer')
  {
    props.setSummer({tintOp, temp, tintLvl});}
  }

  console.log(tintOp, temp, tintLvl)

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Change Settings
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Seasonal Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SetDrop seasonVal={props.seasonVal} setseasonVal={props.setseasonVal}/>
          <Form.Control type="text" placeholder="Set Auto-Open Temperature" onChange={(e) => setTemp(e.target.value)}/>
          <br />
          <Form.Control type="text" placeholder="Set Tint Percentage" onChange={(e) => settintLvl(e.target.value)}/>
          <br />
          <SetTintDrop settintOp={settintOp}/>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={pass}>
            Save Changes
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PreSetModal;