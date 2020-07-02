import React from "react";


export default (props) => {
    const { children } = props;
    return (
        <div className="message">
            <div className="right">
                <span> {children}</span>
                <img src="http://emilcarlsson.se/assets/mikeross.png" />
            </div>
        </div>
    )
}