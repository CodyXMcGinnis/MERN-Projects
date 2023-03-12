import React, { useState } from  'react';
    
const Form = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const [firstNameError, setFirstNameError] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const handleFirstName = (e)=> {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameError("First Name must be at least 2 characters");
        }
        else{
            setFirstNameError("");
        }
    }

    const handleLastName = (e)=> {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameError("Last Name must be at least 2 characters");
        }
        else{
            setLastNameError("");
        }
    }

    const handleEmail = (e)=> {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be at least 5 characters");
        }
        else{
            setEmailError("");
        }
    }

    const handlePassword = (e)=> {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be at least 8 characters");
        }
        else{
            setPasswordError("");
        }
    }

    return (
        <div>
            <h2>Form</h2>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange={handleFirstName}/>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :
                    ''
                }
            </div><br></br>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange={handleLastName}/>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :
                    ''
                }
            </div><br></br>
            <div>
                <label>Email: </label>
                <input type="text" name="email" onChange={handleEmail}/>
                {
                    emailError ?
                    <p>{ emailError }</p> :
                    ''
                }
            </div><br></br>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={handlePassword}/>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :
                    ''
                }
            </div><br></br>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="password2" onChange={(e) => setPassword2(e.target.value)}/>
            </div>
            {password2 !== password ? <p>Passwords must match</p> : null}
            <br></br>
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