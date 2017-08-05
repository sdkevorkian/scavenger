var React = require('react');

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            users: []
        }
    }

componentDidMount() {
    fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
  }

    render() {
        return (
                    <div className="container">
                        <h1 className="title">Scavenger</h1>
                        {this.state.users.map(user =>
                            <div key={user.id}>{user.username}</div>
                        )}
                    </div>
        );
    }
}

module.exports = Home;
