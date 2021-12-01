import React from "react";

export default function GoToSignPage({location,history}){
    console.log(history);
    console.log(location);
    return (
        <div>
            <button onClick={()=>history.push('/sign')}>시작하기</button>
        </div>
    
    );
}