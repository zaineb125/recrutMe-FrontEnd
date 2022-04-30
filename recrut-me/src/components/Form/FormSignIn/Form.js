import React ,{useState} from "react";
import FormSignin from "./FormSignin";
import "./FormSignin.css"
import FormSuccess from "./FormSuccess"


const Form =()=>{
  const [isSubmitted,setIsSubmitted]=useState(false);
  
  function submitForm(){
    setIsSubmitted(true);
  }

  return(
    <>
        {!isSubmitted ? 
        (<FormSignin submitForm={submitForm} />):
        (alert("We have received your request !"))
        }
    </>
  )
}

export default Form ;