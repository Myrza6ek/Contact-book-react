import React from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";

const ListCont = ({ contArr, clickDelete, handleShow, setOneEditCont }) => {
  function getID(id) {
    console.log(id);
  }
  function handleEdit(objContList) {
    handleShow();
    setOneEditCont(objContList);
  }
  return (
    <div className="bg-primary bg-gradient">
      <Container className="d-flex flex-column align-items-center">
        <h3 className="text-warning bg-danger">BETTER CALL SAUL</h3>
        <ListGroup as="ol">
          {contArr.map((item, index) =>
            ["Info"].map(variant => (
              <Card
                as="li"
                onClick={() => getID(item.id)}
                bg={variant.toLowerCase()}
                key={item.id}
                text={variant.toLowerCase() === "light" ? "dark" : "white"}
                style={{ width: "24rem" }}
                className="mb-2">
                <Card.Header>
                  <h2>Name: {item.names}</h2>
                </Card.Header>
                <Card.Body>
                  <Card.Title>number: {item.numbers} </Card.Title>
                  <Card.Text className="d-flex justify-content-center">
                    <img
                      className="w-100"
                      src={item.urlImg}
                      alt="item.urlImg"
                    />
                  </Card.Text>
                </Card.Body>
                <span className=" d-flex justify-content-evenly mt-3 mb-3">
                  <Button variant="danger" onClick={() => clickDelete(item.id)}>
                    Delete
                  </Button>
                  <Button variant="warning" onClick={() => handleEdit(item)}>
                    Edit
                  </Button>
                </span>
              </Card>
            ))
          )}
        </ListGroup>
      </Container>
    </div>
  );
};

export default ListCont;
