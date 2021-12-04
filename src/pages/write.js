import React, { useEffect, useState } from "react";
import axios from 'axios';
import InputItem from "../component/InputItem";


const happys = ["0", "1", "2", "3", "4", "5"];
const angrys = ["0", "1", "2", "3", "4", "5"];
const sads = ["0", "1", "2", "3", "4", "5"];
const joys = ["0", "1", "2", "3", "4", "5"];

export default function WritePage(){
    const diarysectionstyle={
        width: '700px',
        height: '350px',
        maxlength: '20'
    };

    const [input, setInput] = useState([]);
    const [saveTitle, setSaveTitle] = useState("");
    const [saveBody, setSaveBody] = useState("");

    const [happy, setHappy] = useState("0");
    const [angry, setAngry] = useState("0");
    const [sad, setSad] = useState("0");
    const [joy, setJoy] = useState("0");
    
    useEffect(() => {
        // 목록 조회 요청 전송
        axios.get(`/api/write`)
        // 응답이 돌아오면 응답 내용으로 목록을 변경
        .then(response => {
          setInput(response.data);
        });
      }, []);
    
    const onSaveClick = () => {
        axios.post('/api/write', {
            happy: happy,
            angry: angry,
            sad: sad,
            joy: joy,
            title: saveTitle,
            body : saveBody
        })
        .then(() => axios.get('/api/write'))
        .then(response => {
            setInput(response.data);
            setHappy("0");
            setAngry("0");
            setSad("0");
            setJoy("0");
            setSaveTitle("");
            setSaveBody("");
         });

        alert('저장하시겠습니까?');
    };

    const onDeleteClick = (item) => {
        axios.delete(`api/write/${item._id}`)
        .then(()=>axios.get(`api/write`))
        .then(response => {
          setInput(response.data);
        })
      };

    const ListUp = input.map(v=>(
        <InputItem
            key={v._id}
            happy={v.happyvalue}
            angry={v.angryvalue}
            sad={v.sadvalue}
            joy={v.joyvalue}
            title={v.titlevalue}
            body={v.bodyvalue}
            onDeleteClick={()=>onDeleteClick(v)}
        />
    ));

    return (
        <div>
            <div className="intro">
                <h1>오늘 하루는 어땠나요?</h1>
                <h2>각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </div>
            <div className="chooseemotion">
                <div className="happy">
                    <label> 희 </label>
                    {happys.map(f => (
                    <>
                        <input
                            type="radio"
                            name="happy"
                            value={f}
                            checked={happy===f}
                            onChange={e=>setHappy(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </div>
                <br />
                <div className="angry">
                    <label> 노 </label>
                    {angrys.map(f => (
                    <>
                        <input
                            type="radio"
                            name="angry"
                            value={f}
                            checked={angry===f}
                            onChange={e=>setAngry(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </div>
                <br />
                <div className="sad">
                    <label> 애 </label>
                    {sads.map(f => (
                    <>
                        <input
                            type="radio"
                            name="sad"
                            value={f}
                            checked={sad===f}
                            onChange={e=>setSad(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </div>
                <br />
                <div className="joy">
                    <label> 락 </label>
                    {joys.map(f => (
                    <>
                        <input
                            type="radio"
                            name="joy"
                            value={f}
                            checked={joy===f}
                            onChange={e=>setJoy(e.currentTarget.value)}
                        />{" "}
                        {f}
                    </>    
                    ))}
                </div>
        </div>
                <br />
                <textarea
                    className="Title"
                    value={saveTitle}
                    onChange={v=>setSaveTitle(v.target.value)}
                    required/>
                <br />
                <textarea
                    className="Body"
                    value={saveBody}
                    style={diarysectionstyle}
                    onChange={v=>setSaveBody(v.target.value)}
                    required/>
                <br />
                <button onClick={()=>onSaveClick()}>저장</button>
                {ListUp}
        </div>
    );
}