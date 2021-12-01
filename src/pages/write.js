import React from "react";

export default function WritePage(){
    return (
        <div>
            <head className="intro">
                <h1>오늘 하루는 어땠나요?</h1>
                <h2>각각의 감정을 느낀 정도를 숫자를 통해 표현해보세요.</h2>
            </head>
            <body className="choose emotion">
                <div className="happy">
                    <label> 희 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" />
                    <label> 1 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" />
                    <label> 2 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" />
                    <label> 3 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" />
                    <label> 4 </label>
                    <input type="radio" id="happy" name="emotion" value="happy" />
                    <label> 5 </label>
                </div>
                <div className="angry">
                    <label> 노 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" />
                    <label> 1 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" />
                    <label> 2 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" />
                    <label> 3 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" />
                    <label> 4 </label>
                    <input type="radio" id="angry" name="emotion" value="angry" />
                    <label> 5 </label>
                </div>
                <div className="sad">
                    <label> 애 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" />
                    <label> 1 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" />
                    <label> 2 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" />
                    <label> 3 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" />
                    <label> 4 </label>
                    <input type="radio" id="sad" name="emotion" value="sad" />
                    <label> 5 </label>
                </div>
                <div className="joy">
                    <label> 락 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" checked="checked" />
                    <label> 0 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" />
                    <label> 1 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" />
                    <label> 2 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" />
                    <label> 3 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" />
                    <label> 4 </label>
                    <input type="radio" id="joy" name="emotion" value="joy" />
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