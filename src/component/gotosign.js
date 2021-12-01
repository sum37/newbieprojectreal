import React from "react";
import { Link } from 'react-router-dom';

function GoToSignPage({location,history}){
    console.log(history);
    console.log(location);
    return (
        <div>
            {/* <button onClick={()=>history.push('/sign')}>시작하기</button> */}
            <Link to="/sign">시작하기</Link>

        </div>
    
    );
}

export default GoToSignPage;