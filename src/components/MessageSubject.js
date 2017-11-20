import React from 'react';

class MessageSubject extends React.Component {


  render(){


    let readUnread = this.props.msgs.read ? "read" : "unread";
    let msgSelected = this.props.msgs.selected ? "selected" : '';
    let msgStar = this.props.msgs.starred ? "fa-star" : "fa-star-o";
    let checked = msgSelected ? "checked" : "";

    let labels = this.props.msgs.labels.map(label =>
      <span className="label label-warning" key={label.id}>{label}</span>)

    return (
      <div className="container">
        <div className={`row message ${readUnread} ${msgSelected}`}>
          <div className="col-xs-1">
            <div className="row">
              <div className="col-xs-2">

                {/* Checkboxs go here */}
                <input type="checkbox" checked={checked}
                onChange={()=>this.props.handleMsgCheckbox(this.props.msgs)}/>
              </div>
              <div className="col-xs-2">

                {/* Star go here */}
                <i className={`star fa ${msgStar}`}
                value={this.props.msgs.starred}
                onClick={()=>this.props.handleStars(this.props.msgs)}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-xs-11">

            {/* Label goes here */}
            {labels}


            {/* Subjects go here */}
            {this.props.msgs.subject}
          </div>
        </div>
      </div>

    )
  }
}

export default MessageSubject;
