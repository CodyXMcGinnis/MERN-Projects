import React, { useState } from  'react';
    
const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    
    const handleFirstName = (e)=> setFirstName(e.target.value)
    const handleLastName = (e)=> setLastName(e.target.value)
    const handleEmail = (e)=> setEmail(e.target.value)
    const handlePassword = (e)=> setPassword(e.target.value)
    const handlePassword2 = (e)=> setPassword2(e.target.value)

    return (
        <div>
            <h2>Form</h2>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleFirstName}/>
            </div><br></br>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={handleLastName}/>
            </div><br></br>
            <div>
                <label>Email: </label>
                <input type="text" name="email" onChange={handleEmail}/>
            </div><br></br>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={handlePassword}/>
            </div><br></br>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="password2" onChange={handlePassword2}/>
            </div><br></br>
            <div>
                <h2>Your Form Data</h2>
                <p>
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label>Email: </label>{ email }
                </p>
                <p>
                    <label>Password: </label>{ password }
                </p>
                <p>
                    <label>Confirm Password: </label>{ password2 }
                </p>
            </div>
        </div>
    );
};
    
export default Form;