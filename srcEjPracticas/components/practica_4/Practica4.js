
import { useState } from "react";
import CheckBox from "./components/CheckBox/CheckBox";
import Input1 from "./components/Input1/Input1";
import Select from "./components/Select/Select";


export default function Practica4 () {
  //////////////////////
    const [valueInput, setValueInput] = useState(Math.round(Math.random()))
    const valueInputHandler = (event) =>{
    setValueInput( parseInt(event.target.value) === 1 || parseInt(event.target.value) === 0  ? event.target.value: 0 );   
    }   
    console.log("Valor seteado del input:", valueInput);

    ////////////////////////////
    const [ischecked, Setischecked] = useState(0);
   
    const checkBoxValueHandler = () =>{
    (ischecked == 0 ? Setischecked(1):Setischecked(0))
    }
    
    console.log("Valor seteado del checkbox:", ischecked);
    ///////////////////////////////////
    const [selectValue, setSelectValue] = useState()
  
    const selectValueHandler = (event) =>{
        
        console.log(event.target.value);

        if(event.target.value === "or"){
        
            (valueInput  == 1 || ischecked == 1 ? setSelectValue(1):setSelectValue(0));
        }else if(event.target.value === "and"){
            (valueInput  == 1 && ischecked == 1 ? setSelectValue(1):setSelectValue(0));
        }else if(event.target.value === "nand"){
            (!(valueInput  == 1 && ischecked == 1) ? setSelectValue(1):setSelectValue(0));
        }else if(event.target.value === "nor"){
            (!(valueInput  == 1 || ischecked == 1 )? setSelectValue(1):setSelectValue(0));
        }else if(event.target.value === "xor"){
            (valueInput  == 1 ^ ischecked == 1 ? setSelectValue(1):setSelectValue(0));
        }
        } 
 
    
       console.log("Valor setiado del Select",selectValue);
   
    
    return (
    <div className="App">
    <div>
    <label htmlFor="input1">Entrada 1:</label>
    <input type="number" id="input1" onChange={valueInputHandler} />    
    </div>

    <div>
    <label><input type="checkbox" onChange={checkBoxValueHandler} /> Entrada 2</label>
    </div>

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
        <div><span>Salida: {selectValue}</span></div>
    </div>
    );
}