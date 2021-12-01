import React from 'react';
import JoinButton from '../component/joinbutton';
import LoginButton from '../component/loginbutton';
import { useState } from 'react';


function SignPage(){
    const [inputId, setInputId] = useState('')
    const [inputPW, setInputPW] = useState('')
    const hadleInputId =(e)=>{
        setInputId(e.target.value)
    }
    const hadleInputPW =(e)=>{
        setInputPW(e.target.value)
    }
    return(
        <>
        <h1>로그인 페이지</h1>
        <div>
            <label htmlFor='input_id'> I  D : </label>
            <input type='text' name='input_id' value={inputId} onChange={hadleInputId} />
        </div>
        <div>
            <label htmlFor='input_pw'>PW: </label>
            <input type='text' name='input_pw' value={inputPW} onChange={hadleInputPW} />
        </div>
        <LoginButton />
        <JoinButton />
        </>
    );
}

export default SignPage;