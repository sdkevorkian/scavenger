var React = require('react');
var PropTypes = require('prop-types');

class NewGameForm extends React.Component{
    render() {
        var onChange = this.props.onChange;
        var game = this.props.game;
        var onSubmit = this.props.onSubmit;
    return (
    <form onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor='name'>Who is the event for?</label>
            <input type="text"
                className="form-control"
                id="name"
                name='name'
                placeholder="enter name"
                onChange = {onChange}
                value={game.name}
            />
        </div>
        <div className="form-group">
            <label htmlFor='event'>What type of event is it?</label>
            <input type="text"
                className="form-control"
                id="event"
                name='event'
                placeholder="enter event"
                onChange = {onChange}
                value={game.event}
            />
        </div>
        <div className="form-group">
            <label htmlFor='members'>Who are the team members? please separate by commas, and click make team for each team.</label>
            <input type="text"
                className="form-control"
                id="members"
                name='members'
                placeholder="enter members"
                onChange = {onChange}
                value={game.members}
            />
            <p className='button' onClick={this.props.splitTeams.bind(this, game.members)}>Make Team</p>
            Confirm game:
            {game.name && <p>name of person: {game.name}</p>}
            {game.event && <p>event celebrating: {game.event} </p>}
            {game.teams && <p>teams: {game.teams}</p> }
        </div>
        <button type="submit" className="button">Create Game</button>
    </form>

    )}
};

NewGameForm.PropTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    game: PropTypes.object
}

module.exports = NewGameForm;
