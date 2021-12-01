import React from "react";

export default function WritePage(){
    const diarysectionstyle={
        width: '700px',
        height: '350px',
        maxlength: '20'
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
                    <input type="radio" name="happy" value="0" />
                    <label> 0 </label>
                    <input type="radio" name="happy" value="1" />
                    <label> 1 </label>
                    <input type="radio" name="happy" value="2" />
                    <label> 2 </label>
                    <input type="radio" name="happy" value="3" />
                    <label> 3 </label>
                    <input type="radio" name="happy" value="4" />
                    <label> 4 </label>
                    <input type="radio" name="happy" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="angry">
                    <label> 노 </label>
                    <input type="radio" name="angry" value="0" />
                    <label> 0 </label>
                    <input type="radio" name="angry" value="1" />
                    <label> 1 </label>
                    <input type="radio" name="angry" value="2" />
                    <label> 2 </label>
                    <input type="radio" name="angry" value="3" />
                    <label> 3 </label>
                    <input type="radio" name="angry" value="4" />
                    <label> 4 </label>
                    <input type="radio" name="angry" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="sad">
                    <label> 애 </label>
                    <input type="radio" name="sad" value="0" />
                    <label> 0 </label>
                    <input type="radio" name="sad" value="1" />
                    <label> 1 </label>
                    <input type="radio" name="sad" value="2" />
                    <label> 2 </label>
                    <input type="radio" name="sad" value="3" />
                    <label> 3 </label>
                    <input type="radio" name="sad" value="4" />
                    <label> 4 </label>
                    <input type="radio" name="sad" value="5" />
                    <label> 5 </label>
                </div>
                <br />
                <div className="joy">
                    <label> 락 </label>
                    <input type="radio" name="joy" value="0" />
                    <label> 0 </label>
                    <input type="radio" name="joy" value="1" />
                    <label> 1 </label>
                    <input type="radio" name="joy" value="2" />
                    <label> 2 </label>
                    <input type="radio" name="joy" value="3" />
                    <label> 3 </label>
                    <input type="radio" name="joy" value="4" />
                    <label> 4 </label>
                    <input type="radio" name="joy" value="5" />
                    <label> 5 </label>
                </div>
            </body>
            <body className="diary section">
                <textarea cols="20" rows="10" name='diary section' style={diarysectionstyle}/>
                <br />
                <input type="submit" value="저장"/>
            </body>
            <body className="list of diarys">
                <h1>안녕</h1>
            </body>
        </div>
    );
}