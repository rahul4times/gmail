import React from 'react';
import Header from './Header';
import ToolBar from './ToolBar';
import ComposeMessage from './ComposeMessage';
import MessageList from './MessageList';
import Footer from './Footer';


class MainContainer extends React.Component {


  render(){
    console.log('Props from MainContainer: ', this.props);
    return (
      <div>
        <Header />
        <ToolBar />
        <ComposeMessage />
        <MessageList msgData={this.props.msgData}
        handleMsgSelectionCheckbox={this.props.handleMsgSelectionCheckbox}
        />
        <Footer />
      </div>
    )
  }
}

export default MainContainer;
