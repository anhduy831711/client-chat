import React, { Component } from "react";
import Message from "./../components/message"
import MessageRight from "./../components/messageRight"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}

class ListMessage extends Component {
    render() {
        let { messages } = this.props;
        
        return (
            <div id="chat">
                {
                    messages.map((item, index) => {
                        if (index % 2) {
                            return (<MessageRight> {item} </MessageRight>)
                        }
                        return (<Message > {item} </Message>)
                    })
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(ListMessage);