import React from "react";

export default function Header({location,history}){
    return (
        <div>
            <h1>Personal Diary</h1>
            <p>Wow!</p>
            <button onClick={()=>history.push('/sign')}>로그인</button>
        </div>
    
    );
}