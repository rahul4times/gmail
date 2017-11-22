import React, { Component } from 'react';
import MainContainer from './components/MainContainer';
import axios from 'axios';

class App extends Component {

  state = {
    msgData:[],
    show: false
  }


  componentDidMount = () =>{

    Promise.all([
      axios.get(`http://localhost:8000/messages`)
    ])
    .then(arrayOfResolvedPromise => {
      let msgsFromApi = arrayOfResolvedPromise[0].data;
      this.setState({msgData: msgsFromApi});
    })

  }

  // This function handles show/hide compose message
  composeNewMessage = () => {
    let show = this.state.show;
    this.setState({ show: !show });
  }


  // This function handles select individual message checkbox
  handleMsgCheckbox = (selectedMessage) => {

    let index;
    let stateMsgClone = this.state.msgData.map((message, i) => {
      if (message.id === selectedMessage.id) {
        index = i;
      }
      return {...message};
    })
    stateMsgClone[index].selected = !stateMsgClone[index].selected;
    this.setState({ msgData: stateMsgClone})
  }

  // This function handles stars
  handleStars = (currentStarMessage) => {
    let index;
    let stateMsgClone = this.state.msgData.map((message, i) => {
      if (message.id === currentStarMessage.id) {
        index = i;
      }
      return {...message};
    })
    stateMsgClone[index].starred = !stateMsgClone[index].starred;
    this.setState({ msgData: stateMsgClone})
  }

  // This function handles select all or deselect all
  // This function displays two other functions unselectAll and selectAllMsg
  toolbarSelectionHandler = (icon) => {
    if(icon === 'fa-check-square-o'){
      this.unselectAll();
    }else{
      this.selectAllMsg()
    }
  }
  // This function is connected to toolbarSelectionHandler
  unselectAll(){
    let newState =this.state.msgData.map(message => {
      message.selected = false;
      return {...message}
    });
    this.setState({msgData: newState});
  }
  // This function is connected to toolbarSelectionHandler
  selectAllMsg(){
    let newState =this.state.msgData.map(message => {
      message.selected = true;
      return {...message}
    });
    this.setState({msgData: newState});
  }

  // This function handles Mark As Read button
  markAsReadBtn = (input) => {
    // if user clicks on Mark as read button without selecting message that this fires
    let index = [];
    if(input.length === 0){
      alert('Message not selected!');
    } else {

      // input is full object but with selected message status = true
      // Using filter to find out which message is selected out of all
      let stateMsgClone = this.state.msgData.map((message, i) => {
        input.map((inp, y) => {
          if (message.id === inp.id){
            index.push(i);
          }
        })
        return {...message};
      })

      // if more than one messages are selected then this will take care of all
      let actionOnSelected = index.map(position => {
        stateMsgClone[position].read = true;
        this.setState({ msgData: stateMsgClone})
      })
    }
  }

  // This function handles Mark As Unread button
  markAsUnReadBtn = (input) => {

    // if user clicks on Mark as unread button without selecting message that this fires
    let index = [];
    if(input.length === 0){
      alert('Message not selected!');
    } else {

      // input is a full object but with selected message status = true
      // Using filter to find out which message is selected out of all
      let stateMsgClone = this.state.msgData.map((message, i) => {
        input.map((inp, y) => {
          if (message.id === inp.id){
            index.push(i);
          }
        })
        return {...message};
      })

      // if more than one messages are selected then this will take care of all
      let actionOnSelected = index.map(position => {
        stateMsgClone[position].read = false;
        this.setState({ msgData: stateMsgClone})
      })
    }
  }

  // This function handles removing message
  removeMessage = (input) => {

    // if user clicks on Mark as trash button without selecting message that this fires
    if(input.length === 0){
      alert('Message not selected!');
    } else {
      let newState =this.state.msgData.filter((message) => !message.selected)
      this.setState({msgData: newState});
    }
  }

  // This adds labels
  addLabels = (input) => {

    let duplicate = this.state.msgData.map(msg => {
      if(msg.selected && !msg.labels.includes(input)) msg.labels.push(input)
      return {...msg}
    });

    this.setState({msgData: duplicate});

  }

  // This removes labels
  removeLabels = (input) => {

    let newState = this.state.msgData.map(msg => {
      if(msg.selected) msg.labels = msg.labels.filter(l => l !== input)
      return msg
    })

    this.setState({ messages: newState })

  }


  render() {

    return (
      <div className="App">

        <MainContainer
        msgData={this.state.msgData}
        composeNewMessage={this.composeNewMessage}
        gettingStateForNewMessage={this.state.show}
        handleMsgCheckbox={this.handleMsgCheckbox}
        handleStars={this.handleStars}
        toolbarSelectionHandler={this.toolbarSelectionHandler}
        markAsReadBtn={this.markAsReadBtn}
        markAsUnReadBtn={this.markAsUnReadBtn}
        removeMessage={this.removeMessage}
        addLabels={this.addLabels}
        removeLabels={this.removeLabels}
        />

      </div>
    );
  }
}

export default App;
