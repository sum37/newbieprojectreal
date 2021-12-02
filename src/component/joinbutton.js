import React from "react";
import { Link } from 'react-router-dom';

function JoinButton(){
    return (
        <div>
            <Link to="/join">
                <button>회원가입</button>   
            </Link>
        </div>
    
    );
}

export default JoinButton;