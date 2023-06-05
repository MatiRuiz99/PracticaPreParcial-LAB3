import { useState } from "react";

const CheckBox = () => {
    const [ischecked, Setischecked] = useState(0);
   
    const checkBoxValueHandler = () =>{

    //Forma corta
    (ischecked == 0 ? Setischecked(1):Setischecked(0))
      
    //Forma larga
     /*  if(ischecked == 0){
        Setischecked(1);
      }else{
        Setischecked(0);
      }
         */
     
    }
    
    console.log("Valor seteado del checkbox:", ischecked);

    
  return (
    <div>
        <label><input type="checkbox" onChange={checkBoxValueHandler} /> Entrada 2</label>
    </div>
  )
}   

export default CheckBox