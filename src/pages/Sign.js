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
        <div>
            <input type="submit"/>
        </div>
        <JoinButton />
        </>
    );
}

export default SignPage;