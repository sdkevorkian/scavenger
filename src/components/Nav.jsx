var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component{
    render(){
        return(
          <nav>
                <ul className="top-bar">
                      <li className="top-bar-left">
                            <Link to='/'>Home</Link>
                      </li>
                      <li className="top-bar-right">
                            <p>Test 1</p>
                      </li>
                       <li className="top-bar-right">
                            <p>Test 2</p>
                      </li>
                </ul>
          </nav>
        );
    }
}

module.exports = Nav;
