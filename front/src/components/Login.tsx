import React, { useState } from "react";


function LoginForm (){
    const [email,setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('email',email);
        console.log('password',password);
    }
    
<div>
    <form className='login-form'>
        <input type="text" placeholder='Email@merry.com' name="email" required onChange={e => setEmail(e.target.value)}></input>
        <input type="password" placeholder='비밀번호' name='password' required onChange={e=>setPassword(e.target.value)}/>

        <button type='button' className='login-btn'>로그인</button>
        <button type='button' className='signup-btn'>회원가입</button>
    </form>
</div>
}

export default LoginForm();