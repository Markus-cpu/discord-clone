import React from "react";
import "./Messages.css";
import { Avatar } from "@material-ui/core";

const Messages = () => {
    return (
        <div className="messages">
            <Avatar />
            <div className="messages__info">
                <h4>User Name
                    <span className="messages__timestamp">Time stamp</span>
                </h4>
                <p>Messages</p>
            </div>
        </div>
    )
}

export default Messages