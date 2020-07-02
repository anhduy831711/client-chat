import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"
import { Form } from "react-bootstrap"

import "./../assets/css/home.css";
import Name from "./../components/name";
import ListUser from "./../components/user";
import ListMessage from "./../components/list-messgage";
import "./../assets/css/message.css";
import SendMessage from "./../components/sendMessage";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: ["Trần Anh Duy", "", "", "", "", "", ""]
        }
    }
    render() {
        console.log("render home");
        const { users } = this.state;
        return (
            <div id="home">
                <div id="left">
                    <Name >
                        <FontAwesomeIcon icon={faCog} />
                    </Name>
                    <Form.Control autoComplete="off" type="text" name="password" required placeholder="message" />
                    <ListUser />
                </div>
                <div id="right">
                    <Name />
                    <ListMessage />
                    <SendMessage />
                </div>
            </div>
        )
    }
}

export default Home;