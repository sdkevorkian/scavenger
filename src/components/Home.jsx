var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            games: []
        }
    }

    render() {
        return (
                    <div className="container">
                        <h1 className="title">Scavenger</h1>
                        <p>Let's play scavenger hunt! You can start a new game or find an exisiting game.</p>
                        <Link to='/new' className="title">New Game?</Link>
                        <h3 className="title">Find Game?</h3>
                    </div>
        );
    }
}

module.exports = Home;
