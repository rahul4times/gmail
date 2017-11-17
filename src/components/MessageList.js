import React from 'react';
import MessageSubject from './MessageSubject'


class MessageList extends React.Component {


render(){
  console.log('Props from MessageList page: ', this.props);

  let allMessages = this.props.msgData.map((msg) =>
  <MessageSubject key={msg.id} msgSubject={msg.subject}/>);

  return (
    <div className="container">

          {allMessages}
        
    </div>


  );
}
}

export default MessageList;
