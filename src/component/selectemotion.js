import React, { useState } from "react";
import './selecemotion.css';
const happys = ["0", "1", "2", "3", "4", "5"];
const angrys = ["0", "1", "2", "3", "4", "5"];
const sads = ["0", "1", "2", "3", "4", "5"];
const joys = ["0", "1", "2", "3", "4", "5"];

export default function SelectEmotion(){
    const [happy, setHappy] = useState("0");
    const [angry, setAngry] = useState("0");
    const [sad, setSad] = useState("0");
    const [joy, setJoy] = useState("0");

    return(
        <body className="chooseemotion">
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
        </body>
    )
}