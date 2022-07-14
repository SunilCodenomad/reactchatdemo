import React,{useState,useEffect} from "react";
import './Signup.css'
import firebase from "./Firebase";



const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    
   


    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.firestore().collection("user").add({
          name: name,
          email:email,
          password:password,
          phone:phone,
        });
      
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
      };
    
    
      
  
    return (
        <div class="container">
            <form name="custom_form" id="customForm" action="valid.html">
                <div class="form_box">
                    <h1>Registration Form</h1>
                    <div class="input-row">
                        <input type="text" name="name" placeholder="Name*" value={name} onChange={(e) => setName(e.target.value)}/>
                        <span class="error">Please Enter Your Name</span>
                    </div>

                    <div class="input-row">
                        <input type="text" name="email" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <span class="error">Please Enter Your Email</span>
                    </div>
                    <div class="input-row">
                        <input type="text" name="phone" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <span class="error">Please Enter Your password</span>
                    </div>
                    <div class="input-row">
                        <input type="text" name="phone" placeholder="Phone*" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <span class="error">Please Enter Your Phone</span>
                    </div>

                    <input type="submit" value="Submit" onClick={handleSubmit}></input>
                </div>
            </form>
        </div>
    )

}
export default Signup