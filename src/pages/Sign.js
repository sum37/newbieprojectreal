import React from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

function SignPage(){
    return(
        <div className="Entire">
            <div className="InputBox">
                <label className="ID"> I  D   : </label>
                <input className="IDbox"type='text' name='id'/>
            </div>
            <div className="InputBox">
                <label className="PW">PW  : </label>
                <input className="PWbox" type='password' name='pw'/>
            </div>

            <input className="login-button2" type="submit" value="로그인"/>
            
            <div>
                <Link to="/join">
                    <button className="joinbutton">회원가입</button>   
                </Link>
            </div>
        </div>
    );
}

export default SignPage;