import { useState } from "react";
import BasicIdentity from "./BasicIdentity";

export default function Data(){
    const [submitted,setSubmitted] = useState(false);
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        dob:"",
        phone:"",
        Aadhar:"",
        Address:"",
        Account:""
    });
    const handleChange = (event) => {
            setFormData({
                ...formData,[event.target.name]:event.target.value
            });
        };
    const handleSubmit = (submit) => {
        submit.preventDefault();
        setSubmitted(true);
    };

}