import "./App.css";
import InputField from "./InputField";
import { useState } from "react";
import MyModal from "./ModalMessage";



export default function App() {
 
  const [formInputs,setFormInputs]=useState({name:"",phone:"",age:"",isEmployee:false,salaryRange:""})
  let[showModal,setShowModal]=useState(false)
  let[modalMessage,setModalMessage]=useState("")
  let [modalType,setModalType]=useState("")

  function handleSubmit (e) {
    e.preventDefault();
    if(formInputs.name=="" || !/[a-zA-Z]/.test(formInputs.name) ){
      setShowModal(true)
      setModalMessage("Please enter a valid name")
      setModalType("error")
      return
    }
    if(!/^[0-9]{11}$/.test(formInputs.phone)){
      setShowModal(true)
      setModalMessage("Please enter a valid phone Number")
      setModalType("error")
      return
    }
    if(formInputs.age<18 || formInputs.age>100){
        setShowModal(true)
      setModalMessage("your age should be beween 18 to 100")
      setModalType("error")
      return
    }
    
       setShowModal(true)
      setModalMessage("your loan request has been sent successfully")
      setModalType("success")
    
  }
 
  return (

    <div  style={{background:"rgba(255,255,255,0.3)", backdropFilter:"Blure(10px)",border:"1px solid rgba(255,255,255,0.3)",boxShadow:"0 0 8px regba(0,0,0,0.2)",borderRadius:"20px",padding:"10px",display:"flex" ,flexDirection:"column", justifyContent:"center",alignItems:"center",width:"500px"}}>
     <div style={{width:"100%"}}>
      <h3 style={{textAlign:"center",marginBottom:"5px"}}>Loan Request</h3>
      <hr></hr>
     </div>
     
      <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
      <InputField onChange={(e)=>{setFormInputs({...formInputs,name:e.target.value})}} value={formInputs.name} label="Name"/>
      
      <InputField onChange={(e)=>{setFormInputs({...formInputs,phone:e.target.value})}} value={formInputs.phone} label="Phone Number"/>
      <InputField pattern="[0-9]+$" onChange={(e)=>{setFormInputs({...formInputs,age:e.target.value})}} value={formInputs.age} label="Age"/>
      <label style={{fontSize:"20px",marginBottom:"5px"}}>Are you an Employee?</label>
      <input onChange={(e)=>{setFormInputs({...formInputs,isEmployee:e.target.checked})}} checked={formInputs.isEmployee} style={{marginBottom:"5px",cursor:"pointer"}} type="checkbox"/>
      <select onChange={(e)=>{setFormInputs({...formInputs,salaryRange:e.target.value})}} value={formInputs.salaryRange} style={{width:"100%", padding:"4px" , outline:"none" ,border:"none" , borderRadius:"10px",marginBottom:"5px"}}>
        <option>Less Than 500$</option>
        <option>Less Than 1000$</option>
        <option>Less Than 2000$</option>
      </select>
      <input style={{ padding:"10px" ,margin:"5px", outline:"none" ,border:"none" , borderRadius:"10px",backgroundColor:"rgba(80, 49, 115, 1)",cursor:"pointer",width:"100px"}} type="submit"/>
      </form>
     <div>
        {showModal&&
         <MyModal onClose={() => setShowModal(false)}  message={modalMessage} type={modalType}/>
        }
     
     </div>
    </div>

  );
}