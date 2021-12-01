import React from "react";
import { Link } from 'react-router-dom';

function LoginButton(){
    return (
        <div>
            <Link to='/sign'>로그인</Link>
        </div>
    
    );
}

export default LoginButton;