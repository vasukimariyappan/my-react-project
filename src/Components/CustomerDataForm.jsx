import "../index.css";
import { useState } from "react";


export default function CustomerDataForm(){
    
    const fields =[{label:"Full Name:",name:"name"} ,
        {label:"Email:",name:"email"} ,
        {label:"Date Of Birth:" ,name:"dob"},
        {label:"Phone Number:" ,name:"phone"},
        {label:"Aadhar Number:" ,name:"Aadhar"},
        {label:"Permanent Address:" ,name:"Address"},
        {label:"Account Number:" ,name:"Account"}];
    const [formData,setFormData]=useState({
            name:"",
            email:"",
            dob:"",
            phone:"",
            Aadhar:"",
            Address:"",
            Account:""
        });
     const [submitted,setSubmitted] = useState(false);
   
    const handleChange = (event) => {
            setFormData({
                ...formData,[event.target.name]:event.target.value
            });
        };
    const handleSubmit = (submit) => {
        submit.preventDefault();
        setSubmitted(true);
    };
    
    return(
        <div className="form-container">
            <h1>Finance Company Data Management System</h1>
            <h2 className="form-heading">Customer Data</h2>

            <form onSubmit={handleSubmit}>
    {fields.map((field)=>(
        <div className="form-field" key={field.name}>
            <label className="form-label">
                {field.label}
            </label>
            <input className="form-input" type="text" name={field.name}
            value={formData[field.name]} onChange={handleChange} />          
         </div> ))}
         <div>
            <button className="submit-button"onClick={handleSubmit} type="submit">Submit</button>
    
         </div>
</form>
    </div>

    );

}