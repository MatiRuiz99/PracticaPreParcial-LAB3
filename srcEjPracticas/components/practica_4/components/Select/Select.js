import { useState } from "react";
import CheckBox from "../CheckBox/CheckBox"
const Select = (props) => {
    const [selectValue, setSelectValue] = useState()
  
    const selectValueHandler = (event) =>{
        
        console.log(event.target.value);
        if(event.target.value === "or"){
            console.log("estamos or");
        }else if(event.target.value === "and"){
            console.log("estamos and");
        }else if(event.target.value === "nand"){
            console.log("estamos nad");
        }else if(event.target.value === "nor"){
            console.log("estamos nor");
        }else if(event.target.value === "xor"){
            console.log("estamos xor");
        }else{
            console.log("estamos")
        }   
        } 
 
       console.log(selectValue);
   
  return (
<div>
    <label htmlFor="selectGate">Compuerta lógica:</label> 

    <select id="selectGate"  value = "Selecione un valor" onChange={selectValueHandler} >
        <option disabled>Selecione un valor</option>
        <option value="or">or</option>
        <option value="and">and</option>
        <option value="nand">nand</option>
        <option value="nor">nor</option>
        <option value="xor">xor</option>
    </select>  
    </div>
  )
}

export default Select