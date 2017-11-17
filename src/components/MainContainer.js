import React from 'react';
import Header from './Header';
import ToolBar from './ToolBar';
import ComposeMessage from './ComposeMessage';
import MessageList from './MessageList';
import Footer from './Footer';


const MainContainer = () => {

  return (
    <div>
      <Header />
      <ToolBar />
      <ComposeMessage />
      <MessageList />
      <Footer />
    </div>
  )
}

export default MainContainer;
