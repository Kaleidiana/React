import {useState} from "react";

const Sample = () =>{
    const [name, setName] = useState('Kenan Njuguna');
    const changeName = () =>{
        setName('Diana Kalei');
    }
    return(
        <div>
            <h1>My name is: {name} </h1>
            <button onClick={changeName}>Click to Change</button>
        </div>
        
    );
   
}

export default Sample;