import React, { useState } from "react";
//import axios from 'axios';
//import ListItem from "../component/ListItem";


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
    //const [input, setInput] = useState([]);
    //const [saveInput, setSaveInput] = useState("");
    
    const onSaveClick = () => {
        // axios.post('/api/write', {
        //     name: saveInput
        // })
        // .then(() => axios.get('/api/write'))
        // .then(response => {
        //     setInput(response.data);
        //     setSaveInput("");
        // });
        alert('저장하시겠습니까?');
    };

    // const ListUp = input.map(v=>(
    //     <ListItem
    //         key={v.id}
    //         name={v.name}
    //     />
    // ));

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
                    //value={saveInput}
                    style={diarysectionstyle}
                    //onChange={v=>setSaveInput(v.target.value)}
                    required/>
                <br />
                <button onClick={()=>onSaveClick()}>저장</button>
            </body>
            {/* <ListUp /> */}
        </div>
    );
}