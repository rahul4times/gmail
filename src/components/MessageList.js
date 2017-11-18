import React from 'react';
import MessageSubject from './MessageSubject'


class MessageList extends React.Component {


  render(){
    let allMessages = this.props.msgData.map((msg) =>
    <MessageSubject key={msg.id}
    msgs={msg}
    handleMsgCheckbox={this.props.handleMsgCheckbox}
    getInitialState={this.props.getInitialState}
    handleStar={this.props.handleStar}
    />);

    return (
      <div>
        {allMessages}
      </div>
    );
  }
}

export default MessageList;
