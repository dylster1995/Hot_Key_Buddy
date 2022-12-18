import { Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import "../styles/Keyboard.css"

const Keyboard = () => {
  const [key, setKey] = useState("");
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("key")) || [];

    setKeys(data);
  }, [keys]);

  const detectKeyDown = (e) => {
    setKey(e.nativeEvent.code);
  };

  function saveKey() {
    const arr = JSON.parse(localStorage.getItem("key")) || [];
    arr.push(key);
    localStorage.setItem("key", JSON.stringify(arr));
  }

  return (
    <>
      <input className="keyboard" type="text" onKeyDown={detectKeyDown} maxLength={1} value={key} />
      <Button className="save-button" variant="primary" on onClick={saveKey}>
        Save
      </Button>

      <div className ="screen">
        {keys.map((savedkey) => (
          <p>{savedkey}</p>
        ))}
      </div>
    </>
  );
};

export default Keyboard;
