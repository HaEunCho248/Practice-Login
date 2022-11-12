import React, { useState } from "react";



function SignUp (){
    const [email,setEmail] = useState<String>("");
    const [password,setPassword] = useState<String>("");
    const [checkPassword,setCheckPassword] = useState<String>("");
    const [name, setName] = useState<String>("");
    const [phone,setPhone] = useState<String>("");
    const [address,setAddress] = useState<String>("");
    return (
        <>
        <form className='signup-form'>
            
        </form>
        </>
    );
}

export default SignUp();