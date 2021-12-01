import React from "react";
import { Link } from 'react-router-dom';

function JoinButton({location,history}){
    return (
        <div>
            {/* <button onClick={()=>history.push('/join')}>회원가입</button> */}
            <Link to="/join">회원가입</Link>
        </div>
    
    );
}

export default JoinButton;