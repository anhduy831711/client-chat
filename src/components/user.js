import React, { useState } from "react";
import "./../assets/css/user.css"
import { Link } from "react-router-dom";

export default (props) => {
    let [ID, setId] = useState(-1);
    let [users] = useState(["Trần Anh Duy", "", "", "", "", "", ""])
    const onClick = (id) => {
        //let isActive = e.target.
        setId(id);
    }
    console.log("render user");
    
    return (
        <div id="list-group">
            {
                users.map((item, index) => (
                    <Link className="user" to="" onClick={() => { onClick(index) }}>
                        <div className={`${(ID == index) ? "active" : ""}`}>
                            <img src="http://emilcarlsson.se/assets/mikeross.png" />
                            <span className="nameMessage">
                                <span>Trần Anh Duy</span>
                                <span>asdkhaskdjha askdjjhaskdjhaskd ádkjhasdkj sadasdasd</span>
                            </span>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

