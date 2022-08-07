import Header from "../Header";
import axios from 'axios'
import './ContactUs.css'
import { useState,useEffect } from "react";
const ContactUs = ()=>{
    const [contactUsName,nameSetHandler]= useState('');
    const [contactUsEmail,emailSetHandler]= useState('');
    const [contactUsPhone,phoneSetHandler]= useState('');
    const [contactUsSubject,subjectSetHandler]= useState('');
    const [contactUsMessage,messageSetHandler]= useState('');
    const [isValid,formValidator] =useState(true);
   const [sent,setValueSent] =useState(true);

   useEffect(()=>{

        setTimeout(()=>{
            setValueSent(true);
        },3000)

   },[sent])
    const nameHandler=(event)=>{
        formValidator(true);
        nameSetHandler(event.target.value)
    }
    const emailHandler=(event)=>{
        formValidator(true);
        emailSetHandler(event.target.value);
    }
    const phoneHandler=(event)=>{
        formValidator(true);
        phoneSetHandler(event.target.value)
    }
    const subjectHandler=(event)=>{
        formValidator(true);
        subjectSetHandler(event.target.value)
    }
    const messageHandler=(event)=>{
        formValidator(true);
        messageSetHandler(event.target.value)
    }
    function sentRemover(){
        setValueSent(true);
        
    }
    function onContactUsSubmitHandler(event){
        event.preventDefault();
        
        if(contactUsName.trim().length===0 || contactUsEmail.trim().length===0 || contactUsPhone.trim().length===0 || contactUsSubject.trim().length===0 ||contactUsMessage.trim().length==0){
            formValidator(false);
            return;
        }
            const obj={
                name:contactUsName,
                email:contactUsEmail,
                phone:contactUsPhone,
                subject:contactUsSubject,
                message:contactUsMessage
            }

            console.log(obj)
            addContactUsData(obj);
      


        
        
    }
    async function addContactUsData(obj){
        
         axios.post('https://schooladminreact.herokuapp.com/contactUsCreate',obj);
            setValueSent(false);
            nameSetHandler('');
            phoneSetHandler('');
            emailSetHandler('');
            subjectSetHandler('');
            messageSetHandler('');
       
    }
    return(
        <div>
            <Header/>
            <form onSubmit={onContactUsSubmitHandler} style={{marginLeft:"0px"}}>
            
            { !isValid && <div style={{backgroundColor:"rgb(248, 126, 126)",textAlign:"center",width:"35%",marginTop:"5%",marginLeft:"30%"}}>
                Please enter Valid Details
            </div>} 
                
                    <input type="text" placeholder="Enter Name" onChange={nameHandler} value={contactUsName} />
                    <input type="email" placeholder="Enter Email" onChange={emailHandler} value={contactUsEmail}/>
               
                    <input type="text" placeholder="Enter Phone" onChange={phoneHandler} value={contactUsPhone}/>
                    <input type="text" placeholder="Enter Subject" onChange={subjectHandler} value={contactUsSubject}/>
               
                
                <textarea name="contactUsMessage" cols={40} rows={10} placeholder="Enter Message" onChange={messageHandler} value={contactUsMessage} />
                {!sent && <div style={{backgroundColor:"rgb(162, 242, 162)",textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"space-around",borderRadius:"20px"}}>
                    <p style={{padding:"0.5rem"}}>Your Data has been successfully recorded.</p>
                    
                </div>}
                <button type="submit" style={{borderRadius:"20px",width:"30%",fontSize:"130%"}}>Submit</button>
           

        </form>  
        </div>
    )
}
export default ContactUs;