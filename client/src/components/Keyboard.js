import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";


const Keyboard = () => {

useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
}, [])

const detectKeyDown = (e) => {
    console.log("Clicked Key: ", e.key)

    if( e.key === " " ) {
        console.log("Key Clicked: Spacebar")
    }
}
return(
<>
<div>


</div>
</>
);
};

export default Keyboard;