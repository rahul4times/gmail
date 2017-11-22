import React from 'react';


class ToolBar extends React.Component {

  render(){




    // currentSelected and defaultIcon take care for icon for select all button
    let currentSelected = this.props.msgData.filter(msg => {
      return msg.selected
    });

    let defaultIcon = (currentSelected.length > 0 &&
      currentSelected.length < this.props.msgData.length) ?
      "fa-minus-square-o" :
        currentSelected.length === 0 ?
          "fa-square-o" :
          "fa-check-square-o";

    // This will send only selected Messages
    let selectedMessages = this.props.msgData.filter(msg => {
      return msg.selected === true;
    });

    // This will count unread messages
    let totalUnread = this.props.msgData.filter(msg => {
      return msg.read === false;
    });


    return (
      <div className="container">
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">
              {totalUnread.length}</span>
              Unread Messages
            </p>

            <a className="btn btn-success"
                onClick={this.props.hideShowNewMessage}
              >
              <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default" onClick={()=>this.props.toolbarSelectionHandler(defaultIcon)}>
              <i className={`fa ${defaultIcon}`}></i>
            </button>

            <button className="btn btn-default"
              onClick={()=>this.props.markAsReadBtn(selectedMessages)}
            >Mark As Read</button>

            <button className="btn btn-default"
              onClick={()=>this.props.markAsUnReadBtn(selectedMessages)}
            >Mark As Unread</button>

            <select className="form-control label-select"
              onChange={(event) => this.props.addLabels(event.target.value)}

            >
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select"
              onChange={(event) => this.props.removeLabels(event.target.value)}
            >
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-danger"
              onClick={()=> this.props.removeMessage(selectedMessages)}
            >
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToolBar;
