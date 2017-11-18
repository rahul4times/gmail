import React from 'react';

class MessageSubject extends React.Component {








  render(){

  console.log('output: ', this.props.msgs.selected);

  let readUnread = this.props.msgs.read ? "read" : "unread";
  let msgSelected = this.props.msgs.selected ? "selected" : '';
  let msgStar = this.props.msgs.starred ? "fa-star" : "fa-star-o";



  return (
    <div className="container">
      <div className={`row message ${readUnread} ${msgSelected}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.msgs.selected}
              onChange={()=>this.props.handleMsgCheckbox(this.props.msgs)}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${msgStar}`} ></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">dev</span>
          <span className="label label-warning">gschool</span>
          {this.props.msgs.subject}
        </div>
      </div>
    </div>

  )

}
}

export default MessageSubject;
