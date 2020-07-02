import React from "react";


export default (props) => {
    const { children } = props;
    return (
        <div className="message">
            <div >
                <img src="http://emilcarlsson.se/assets/mikeross.png" />
                <span> {children}</span>
            </div>
        </div>
    )
}