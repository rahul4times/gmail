import React from 'react';

class ToolBar extends React.Component {

  render(){

    let currentSelected = this.props.msgData.filter(msg => {
      return msg.selected
    });

    let defaultIcon = (currentSelected.length > 0 &&
      currentSelected.length < this.props.msgData.length) ?
      "fa-minus-square-o" :
        currentSelected.length === 0 ?
          "fa-square-o" :
          "fa-check-square-o";






    return (
      <div className="container">
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">2</span>
              unread messages
            </p>

            <a className="btn btn-success">
              <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default" onClick={this.props.toolbarSelectionHandler}>
              <i className={`fa ${defaultIcon}`}></i>
            </button>

            <button className="btn btn-default">Mark As Read</button>

            <button className="btn btn-default">Mark As Unread</button>

            <select className="form-control label-select">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
              <i className="fa fa-trash-o"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ToolBar;
