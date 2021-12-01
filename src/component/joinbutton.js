import React from "react";

export default function JoinButton({location,history}){
    return (
        <div>
            <button onClick={()=>history.push('/join')}>회원가입</button>
        </div>
    
    );
}