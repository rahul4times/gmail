import React, { Component } from 'react';
import MainContainer from './components/MainContainer';

class App extends Component {

  state = {
    msgData:[
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
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
