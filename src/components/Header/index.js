import React from 'react';
import { Jumbotron } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">React Books</h1>
        <p className="lead">Search for books online and save your favorites.</p>
      </Jumbotron>
    </div>
  );
};

export default Header;