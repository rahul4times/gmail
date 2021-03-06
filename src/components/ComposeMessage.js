import React from 'react';

class ComposeMessage extends React.Component {

  state = {
    subject: '',
    body: ''
  }
  handleMsgSubmit = (e) => {
    e.preventDefault();
    this.props.postNewMessage(this.state);
  }

  render(){
    return (
      <div className="container">
        <div>
          <form className="form-horizontal well" onSubmit={this.handleMsgSubmit}>
            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2">
                <h4>Compose Message</h4>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Subject</label>
              <div className="col-sm-8">
                <input type="text" className="form-control" id="subject" placeholder="Enter a subject" name="subject"
                  value={this.state.subject}
                  onChange={(e) => this.setState({subject: e.target.value})}
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">Body</label>
              <div className="col-sm-8">
                <textarea name="body" id="body" className="form-control" placeholder="Message body"
                  value={this.state.body}
                  onChange={(e) => this.setState({body: e.target.value})}
                  ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-8 col-sm-offset-2">
                <input type="submit" value="Send" className="btn btn-primary" />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ComposeMessage;
