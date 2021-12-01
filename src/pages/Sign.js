import React from 'react';
import JoinButton from '../component/joinbutton';
import LoginButton from '../component/loginbutton';


function SignPage(){
    return(
        <>
        <h1>로그인 페이지</h1>
        <LoginButton />
        <JoinButton />
        </>
    );
}

export default SignPage;