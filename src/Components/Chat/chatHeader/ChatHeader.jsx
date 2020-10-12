import React from "react";
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

const ChatHeader = () => {
    return (
        <div className="chatHeader">
              <div className="chatHeader__left">
                  <h3>
                      <span>#</span>
                      Test channel name
                  </h3>
              </div>
              <div className="chatHeader__right">
                  <NotificationsIcon/>
                  <EditLocationIcon/>
                  <PeopleAltRoundedIcon/>
                  <div className="chatHeader__search">
                      <input placeholder="Search" type="text"/>
                      <SearchRoundedIcon/>
                  </div>
                  <SendRoundedIcon/>
                  <HelpRoundedIcon/>
              </div>
        </div>
    )
}

export default ChatHeader