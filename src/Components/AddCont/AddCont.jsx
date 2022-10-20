import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const AddCont = ({ handleCont }) => {
  const [inpCont, setInpCont] = useState("");
  const [inpNum, setInpNum] = useState("");
  const [inpImg, setInpImg] = useState("");

  function handleAdd() {
    if (!inpCont.trim() || !inpNum.trim() || !inpImg.trim()) {
      alert(" IMPOSIBLE Enter details");
      return;
    }

    let objContList = {
      names: inpCont,
      numbers: inpNum,
      urlImg: inpImg,
      id: Date.now(),
    };
    handleCont(objContList);
    setInpCont("");
    setInpNum("");
    setInpImg("");
  }

  return (
    <div className="d-flex flex-column align-items-center bg-primary">
      <div className="d-flex flex-column align-items-center w-50">
        <InputGroup size="sm" className="mb-3 w-50 mt-3">
          <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          <Form.Control
            value={inpCont}
            placeholder="name"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setInpCont(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3 w-50">
          <InputGroup.Text id="inputGroup-sizing-sm">Number</InputGroup.Text>
          <Form.Control
            value={inpNum}
            placeholder="number"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setInpNum(e.target.value)}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3 w-50">
          <InputGroup.Text id="inputGroup-sizing-sm">URL-IMAGE</InputGroup.Text>
          <Form.Control
            value={inpImg}
            placeholder="URL"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            onChange={e => setInpImg(e.target.value)}
          />
        </InputGroup>
      </div>
      <div className="d-flex w-100 flex-column align-items-center">
        <Button
          variant="success"
          className="w-10 mb-3 bg-success bg-gradient"
          onClick={handleAdd}>
          Add contact
        </Button>{" "}
      </div>
    </div>
  );
};

export default AddCont;
