import React from 'react';
import JoinButton from '../component/joinbutton';
import Header from '../component/header';



function SignPage(){
    return(
        <>
        <Header />
        <div>
            <label> I  D : </label>
            <input type='text' name='id'/>
        </div>
        <div>
            <label>PW: </label>
            <input type='text' name='pw'/>
        </div>
        <form>
            <input type="submit" value="로그인"/>
        </form>
        <JoinButton />
        </>
    );
}

export default SignPage;