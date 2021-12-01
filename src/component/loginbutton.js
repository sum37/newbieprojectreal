import React from "react";

export default function LoginButton({location,history}){
    return (
        <div>
            <button onClick={()=>history.push('/sign')}>로그인</button>
        </div>
    
    );
}