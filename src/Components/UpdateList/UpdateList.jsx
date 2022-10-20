import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const UpdateList = ({ show, handleClose, oneEditCont, saveEditedCont }) => {
  const [editedCont1, setEditedCont1] = useState(oneEditCont.names);
  const [editedCont2, setEditedCont2] = useState(oneEditCont.numbers);
  const [editedCont3, setEditedCont3] = useState(oneEditCont.urlImg);

  function handleSave() {
    if (!editedCont1.trim() || !editedCont2.trim() || !editedCont3.trim()) {
      alert("Заполните поле");
      return;
    }
    let editObj = {
      // task: editedTask,
      // id: oneEditTask.id,
      names: editedCont1,
      numbers: editedCont2,
      urlImg: editedCont3,
      id: oneEditCont.id,
    };
    saveEditedCont(editObj);
    handleClose();
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <p className="text-primary fs-1">UPDATE contacts</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={editedCont1}
            placeholder="name"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setEditedCont1(e.target.value)}
          />
          <br />
          <Form.Control
            value={editedCont2}
            placeholder="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setEditedCont2(e.target.value)}
          />
          <br />
          <Form.Control
            value={editedCont3}
            placeholder="URL"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setEditedCont3(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateList;
