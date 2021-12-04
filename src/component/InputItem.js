import React from "react";

const InputItem=(props)=>{
    return(
        <div className="input-item">
            <span className="Happy">{props.happy}</span>
            <span className="Angry">{props.angry}</span>
            <span className="Sad">{props.sad}</span>
            <span className="Joy">{props.joy}</span>
            <div className="title">{props.title}</div>
            <div className="body">{props.body}</div>
            <button onClick={props.onDeleteClick}>삭제</button>
        </div>
    )
}

export default InputItem;