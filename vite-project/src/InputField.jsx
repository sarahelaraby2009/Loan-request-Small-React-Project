export default function InputField({label,onChange,value,onInput,pattern}) {
    return (
        <div style={{width:"400px",padding:"5px",margin:"5px",textAlign:"center"}}>
            <label style={{marginBottom:"4px",fontSize:"20px"}}>{label}</label>
            <div style={{width:"100%",marginTop:"4px"}}>
               <input pattern={pattern}  onInput={onInput} value={value} onChange={onChange} style={{width:"100%", padding:"4px" , outline:"none" ,border:"none",height:"20px" , borderRadius:"10px"}} type="text" required /> 
            </div>
            
        </div>
    )

}