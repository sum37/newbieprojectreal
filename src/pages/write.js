import React, { useEffect, useState } from "react";
import ListButton from "../component/gotolist";
import axios from 'axios';
import ListItem from '../component/ListItem';


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

    const [happy, setHappy] = useState("0");
    const [angry, setAngry] = useState("0");
    const [sad, setSad] = useState("0");
    const [joy, setJoy] = useState("0");
    const [input, setInput] = useState([]);
    const [addInput, setSaveInput] = useState("");
    
    const onSaveclick = () => {
        axios.post('/api/list', {
            name: saveInput
        })
        .then(() => axios.get('/api/list'))
        .then(response => {
            setInput(response.data);
            setSaveInput("");
        });
    };

    return (
        <div>
            <header className="intro">
                <h1>오늘 하루는 어땠나요?</h1>
                <h2>각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </header>
            <body className="choose emotion">
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
                <br />
                <textarea
                    value={addInput}
                    style={diarysectionstyle}
                    onChange={v=>setAddInput(v.target.value)}
                    required/>
                <br />
                <button onClick={()=>onSaveClick()}>저장</button>
            </body>
            {listEls}
            <ListButton />
        </div>
    );
}