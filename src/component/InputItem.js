import React from "react";

const InputItem=(props)=>{
    return(
        <div className="input-item">
            <h2>hi</h2>
            <span className="Happy">{props.happy}</span>
            <span className="Angry">{props.angry}</span>
            <span className="Sad">{props.sad}</span>
            <span className="Joy">{props.joy}</span>
            <div>
                <div className="title">{props.title}</div>
                <div className="body">{props.body}</div>
            </div>
        </div>
    )
}

export default InputItem;