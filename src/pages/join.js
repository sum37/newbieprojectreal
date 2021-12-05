import React from 'react';


function JoinPage(){
    return(
        <div className="Entire">
            <p className="notmain-sub-header">喜 怒 哀 樂</p>
            <h1 className="notmain-header">희 노 애 락</h1>
            <div>
                <div>
                    <label> I  D : </label>
                    <input type='text' name='id'/>
                </div>
                
                <input className="check" type="submit" value="ID 중복확인"/>
                
                <div className="join-PW">
                    <label> 비밀번호 : </label>
                    <input type='text' name='password'/>
                </div>
                <input className="joinbutton" type="submit" value="회원가입" />
            </div>
        </div>
    );
}

export default JoinPage;