import React from "react";
import "./../assets/css/name.css"

export default (props) => {
    return (
        <div className="name">
            <img src="http://emilcarlsson.se/assets/mikeross.png" />
            <span>Trần Anh Duy</span>
            {props.children}
        </div>
    )
}