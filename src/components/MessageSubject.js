import React from 'react';

const MessageSubject = (props) => {
  console.log('Props from MessageSubject: ', props);

  let readUnread = props.msgStatus? "row message read" : "row message unread";

  return (
    <div className="container">
      <div className={readUnread}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <span className="label label-warning">dev</span>
          <span className="label label-warning">gschool</span>
          {props.msgSubject}
        </div>
      </div>
    </div>

  )

}

export default MessageSubject;
