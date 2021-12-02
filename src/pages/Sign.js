import React from 'react';
import JoinButton from '../component/joinbutton';
import Header from '../component/header';



function SignPage(){
    return(
        <>
        <Header />
        <form action='/write'>
        <div>
            <label> I  D : </label>
            <input type='text' name='id'/>
        </div>
        <div>
            <label>PW: </label>
            <input type='password' name='pw'/>
        </div>
        <input type="submit" value="로그인"/>
        </form>
        <JoinButton />
        </>
    );
}

export default SignPage;