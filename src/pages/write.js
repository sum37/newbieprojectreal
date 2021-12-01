import React from "react";

export default function WritePage(){
    return (
        <div>
            <header className="intro">
                <h1>오늘의 하루는 어땠나요?</h1>
                <h2>느낀 감정의 강도를 1에서 5까지 숫자를 통해 표현해보세요.</h2>
            </header>
            <body className="choose emotion">
                <div className="happy">
                    <label> 희 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked"></input>
                    <label> 1 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked"></input>
                    <label> 2 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked"></input>
                    <label> 3 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked"></input>
                    <label> 4 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked"></input>
                    <label> 5 </label>
                </div>
                <div className="angry">
                    <label> 노 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked"></input>
                    <label> 1 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked"></input>
                    <label> 2 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked"></input>
                    <label> 3 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked"></input>
                    <label> 4 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked"></input>
                    <label> 5 </label>
                </div>
                <div className="sad">
                    <label> 애 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked"></input>
                    <label> 1 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked"></input>
                    <label> 2 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked"></input>
                    <label> 3 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked"></input>
                    <label> 4 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked"></input>
                    <label> 5 </label>
                </div>
                <div className="joy">
                    <label> 락 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked"></input>
                    <label> 1 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked"></input>
                    <label> 2 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked"></input>
                    <label> 3 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked"></input>
                    <label> 4 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked"></input>
                    <label> 5 </label>
                </div>
            </body>
        </div>
    
    );
}