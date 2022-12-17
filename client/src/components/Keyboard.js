import { Button } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

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
      <input type="text" onKeyDown={detectKeyDown} maxLength={1} value={key} />
      <Button variant="primary" on onClick={saveKey}>
        Save
      </Button>

      <div>
        {keys.map((savedkey) => (
          <p>{savedkey}</p>
        ))}
      </div>
    </>
  );
};

export default Keyboard;
