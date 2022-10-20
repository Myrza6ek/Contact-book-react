import React, { useEffect, useState } from "react";

import AddCont from "./Components/AddCont/AddCont";
import ListCont from "./Components/ListCont/ListCont";
import Nav from "./Components/Nav/Nav";
import UpdateList from "./Components/UpdateList/UpdateList";

const App = () => {
  const [contArr, setContArr] = useState([]);

  const [show, setShow] = useState(false);
  const [oneEditCont, setOneEditCont] = useState({});

  function handleCont(objContList) {
    let newBook = [...contArr];

    newBook.push(objContList);

    setContArr(newBook);
  }

  function clickDelete(id) {
    let newContArr = contArr.filter(item => {
      return item.id !== id;
    });

    setContArr(newContArr);
  }

  const handleClose = () => setShow(false);
  // функция для открытия модального окна
  const handleShow = () => setShow(true);

  function saveEditedCont(editObj) {
    let newEditedContArr = contArr.map(item => {
      if (item.id === editObj.id) {
        return editObj;
      } else {
        return item;
      }
    });
    setContArr(newEditedContArr);
  }
  useEffect(() => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("contacts");
      setContArr(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contArr));
  }, [contArr]);

  return (
    <div>
      <Nav />
      <AddCont handleCont={handleCont} />
      <ListCont
        contArr={contArr}
        clickDelete={clickDelete}
        setOneEditCont={setOneEditCont}
        handleShow={handleShow}
      />
      {show ? (
        <UpdateList
          oneEditCont={oneEditCont}
          show={show}
          handleClose={handleClose}
          saveEditedCont={saveEditedCont}
        />
      ) : null}
    </div>
  );
};

export default App;
