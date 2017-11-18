import React from 'react';
import Header from './Header';
import ToolBar from './ToolBar';
import ComposeMessage from './ComposeMessage';
import MessageList from './MessageList';
import Footer from './Footer';


class MainContainer extends React.Component {


  render(){

    return (
      <div>
        <Header />
        <ToolBar />
        <ComposeMessage />
        <MessageList msgData={this.props.msgData}
        handleMsgCheckbox={this.props.handleMsgCheckbox}
        getInitialState={this.props.getInitialState}
        handleStar={this.props.handleStar}
        />
        <Footer />
      </div>
    )
  }
}

export default MainContainer;
