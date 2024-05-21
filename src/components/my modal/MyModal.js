import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './MyModal.css'

export default function MyModal(props) {
    return (
      <Modal
        {...props}
        // show
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
           {props.message}
           </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }