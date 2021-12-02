import React from 'react';


function JoinPage(){
    return(
        <>
        <h1>회원가입 페이지</h1>
        <div>
            <label> I  D : </label>
            <input type='text' name='id'/>
            <input type="submit" value="ID 중복확인"/>
            <br />
            <label> 비밀번호 : </label>
            <input type='text' name='password'/>
            <br />
            <input type="submit" value="회원가입"/>
        </div>
        </>
    );
}

export default JoinPage;