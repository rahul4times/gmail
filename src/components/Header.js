import React from 'react';

const Header = () => {

  return(
    <div className="navbar navbar-default" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">g66Email</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="/"><button type="button" className="btn btn-danger btn-sm">Log Out</button></a></li>
        </ul>
      </div>
    </div>
  )

}

export default Header;
