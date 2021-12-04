import React from "react";

const InputItem=(props)=>{
    return(
        <div className="input-item">
            <span>{props.happyvalue}</span>
            <span>{props.angryhvalue}</span>
            <span>{props.sadvalue}</span>
            <span>{props.joyvalue}</span>
            <div>
                <div className="title">{props.titlevalue}</div>
                <div className="body">{props.bodyvalue}</div>
            </div>
        </div>
    )
}

export default InputItem;