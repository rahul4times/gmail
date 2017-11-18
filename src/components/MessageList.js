import React from 'react';
import MessageSubject from './MessageSubject'


class MessageList extends React.Component {


  render(){

    console.log("MSG List props", this.props.msgData);
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
