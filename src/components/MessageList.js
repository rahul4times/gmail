import React from 'react';
import MessageSubject from './MessageSubject'


class MessageList extends React.Component {


  render(){
    let allMessages = this.props.msgData.map((msg) =>
    <MessageSubject key={msg.id}
    // this sends whole object
    msgs={msg}
    // this handles checkbox control
    handleMsgCheckbox={this.props.handleMsgCheckbox}
    handleStars={this.props.handleStars}
    />);

    return (
      <div>
        {allMessages}
      </div>
    );
  }
}

export default MessageList;
