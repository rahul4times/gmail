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


        {/* Toolbar goes here */}
        <ToolBar
        msgData={this.props.msgData}
        hideShowNewMessage={this.props.hideShowNewMessage}
        toolbarSelectionHandler={this.props.toolbarSelectionHandler}
        markAsReadBtn={this.props.markAsReadBtn}
        markAsUnReadBtn={this.props.markAsUnReadBtn}
        removeMessage={this.props.removeMessage}
        addLabels={this.props.addLabels}
        removeLabels={this.props.removeLabels}
        />


        {/* Compose New Message goes here */}
        {this.props.gettingStateForNewMessage ? <ComposeMessage
          postNewMessage={this.props.postNewMessage}
        /> : null}




        {/* Message List goes here */}
        <MessageList msgData={this.props.msgData}
        handleMsgCheckbox={this.props.handleMsgCheckbox}
        handleStars={this.props.handleStars}

        />



        <Footer />
      </div>
    )
  }
}

export default MainContainer;
