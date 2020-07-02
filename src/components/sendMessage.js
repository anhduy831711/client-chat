import React from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import messages from "../reducers/messages";
import { ADD_MESSAGE } from "../actions";

const mapDispatchToProps = dispatch => ({
    addMessage: message => dispatch(ADD_MESSAGE(message))
})


const SendMessage = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const message = event.currentTarget.elements.message.value;
        event.currentTarget.elements.message.value = "";
        props.addMessage(message);
    }

    return (
        <div id="messageChat">
            <Form onSubmit={handleSubmit} autoComplete = "off">
                <Form.Control type="text" required placeholder="message" name="message" />
                <Button className="btn btn-primary" type="submit">Send</Button>
            </Form>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(SendMessage);