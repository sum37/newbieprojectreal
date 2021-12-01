import React from "react";
import { Link } from 'react-router-dom';

function LoginButton({location,history}){
    return (
        <div>
            {/* <button onClick={()=>history.push('/sign')}>로그인</button> */}
            <Link to='/sign'>로그인</Link>
        </div>
    
    );
}

export default LoginButton;