import React from 'react';
import classnames from "classnames";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';

import titleInitials from '../utils/title-initials';

import {chats, messages} from '../mock-data';
import ChatMessageList from './ChatMessageList';
import MessageInput from './MessageInput';

const styles = theme => ({
  chatLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '64px',
    height: '100%',
    overflow: 'hidden',
  }, 
})

const Chat = ({ classes }) => (
  <main className={classes.chatLayout}>
    <ChatMessageList messages={messages} />
    <MessageInput />
  </main>
);

export default withStyles(styles)(Chat);
