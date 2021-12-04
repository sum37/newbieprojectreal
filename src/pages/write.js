import React, { useEffect, useState } from "react";
import axios from 'axios';
import ListItem from "../component/ListItem";
import SelectEmotion from "../component/selectemotion";
import './write.css';

export default function WritePage(){
    const diarysectionstyle={
        width: '700px',
        height: '350px',
        maxlength: '20'
    };

    
    const [input, setInput] = useState([]);
    const [saveInput, setSaveInput] = useState("");
    
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/write`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
          setInput(response.data);
        });
      }, []);
    
    const onSaveClick = () => {
        axios.post('api/write', {
            input: saveInput
        })
        .then(() => axios.get('api/write'))
        .then(response => {
            setInput(response.data);
            setSaveInput("");
         });
        alert('저장하시겠습니까?');
    };

    const ListUp = input.map(v=>(
        <ListItem
            input={v.input}
        />
    ));

    return (
        <div>
            <header className="intro">
                <h1>오늘 하루는 어땠나요?</h1>
                <h2>각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </header>
            <SelectEmotion />
                <br />
                <textarea
                    className="textarea"
                    value={saveInput}
                    style={diarysectionstyle}
                    onChange={v=>setSaveInput(v.target.value)}
                    required/>
                <br />
                <button onClick={()=>onSaveClick()}>저장</button>
        </div>
    );
}