import React from "react";
import { Link } from 'react-router-dom';

function JoinButton(){
    return (
        <div>
            <Link to="/join">회원가입</Link>
        </div>
    
    );
}

export default JoinButton;