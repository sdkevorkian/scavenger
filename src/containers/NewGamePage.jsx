var React = require('react');
var NewGameForm = require('../components/NewGameForm');
var api = require('../utils/api');

class NewGamePage extends React.Component {
        constructor(props){
        super(props);
        this.state = {
            game: {
                name: '',
                event: '',
                teams: []
            }
        };
        this.formChangeHandler = this.formChangeHandler.bind(this);
        this.splitTeams = this.splitTeams.bind(this);
    }

    formChangeHandler(e) {
        var field = e.target.name;
        var game = this.state.game;
        game[field] = e.target.value;

        console.log(game);
        this.setState({
            game
        });
    }

    submitForm(e){
        e.preventDefault();
        api.createNewGame(this.state.game);
    }

    splitTeams(members){
        var addedMembers = members.split(', ');
        var currentGame = this.state.game;
        currentGame.teams.push(addedMembers);
        this.setState({
            game: currentGame
        })
    }

    render (){
        return (
                <div className="container">
                    <h1 className="title">New Game</h1>
                    <NewGameForm
                        onSubmit = ''
                        onChange = {this.formChangeHandler}
                        game = {this.state.game}
                        splitTeams = {this.splitTeams}
                    />
                </div>
        )
    }
}

module.exports = NewGamePage;
