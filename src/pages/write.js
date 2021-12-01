import React from "react";

export default function WritePage(){
    return (
        <div>
            <header className="intro">
                <h1>오늘 하루는 어땠나요?</h1>
                <h2>각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </header>
            <body className="choose emotion">
                <div className="happy">
                    <label> 희 </label>
                    <input type="radio" id="happy" name="emotion" value="0" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="happy" name="emotion" value="1" />
                    <label> 1 </label>
                    <input type="radio" id="happy" name="emotion" value="2" />
                    <label> 2 </label>
                    <input type="radio" id="happy" name="emotion" value="3" />
                    <label> 3 </label>
                    <input type="radio" id="happy" name="emotion" value="4" />
                    <label> 4 </label>
                    <input type="radio" id="happy" name="emotion" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="angry">
                    <label> 노 </label>
                    <input type="radio" id="angry" name="emotion" value="0" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="angry" name="emotion" value="1" />
                    <label> 1 </label>
                    <input type="radio" id="angry" name="emotion" value="2" />
                    <label> 2 </label>
                    <input type="radio" id="angry" name="emotion" value="3" />
                    <label> 3 </label>
                    <input type="radio" id="angry" name="emotion" value="4" />
                    <label> 4 </label>
                    <input type="radio" id="angry" name="emotion" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="sad">
                    <label> 애 </label>
                    <input type="radio" id="sad" name="emotion" value="0" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="sad" name="emotion" value="1" />
                    <label> 1 </label>
                    <input type="radio" id="sad" name="emotion" value="2" />
                    <label> 2 </label>
                    <input type="radio" id="sad" name="emotion" value="3" />
                    <label> 3 </label>
                    <input type="radio" id="sad" name="emotion" value="4" />
                    <label> 4 </label>
                    <input type="radio" id="sad" name="emotion" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="joy">
                    <label> 락 </label>
                    <input type="radio" id="joy" name="emotion" value="0" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="joy" name="emotion" value="1" />
                    <label> 1 </label>
                    <input type="radio" id="joy" name="emotion" value="2" />
                    <label> 2 </label>
                    <input type="radio" id="joy" name="emotion" value="3" />
                    <label> 3 </label>
                    <input type="radio" id="joy" name="emotion" value="4" />
                    <label> 4 </label>
                    <input type="radio" id="joy" name="emotion" value="5" />
                    <label> 5 </label>
                </div>
            </body>
            <body className="diary section">
                <input type='text' name='diary section'/>
                <input type="submit"/>
            </body>
            <body className="list of diarys">
            </body>
        </div>
    );
}