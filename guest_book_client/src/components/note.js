import React from "react";
import './../styles/main.css'


const Note = ({title, content, onclick}) => {
    return (
        <div className="note">
            <div className="note-header">
                <div>
                    <p className="note-title">{title}</p>
                </div>
                <div>
                    <div href="#" className="close" onClick={onclick}>X</div>
                </div>
            </div>
            <div className="note-content">
                <p>{content}</p>
            </div>
        </div>
    )
}

export {Note}