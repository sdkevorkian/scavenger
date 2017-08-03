var React = require('react');
var Home = require('./components/Home');
var Nav = require('./components/Nav');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
        return (
            <Router>
                <main>
                <Nav/>
                <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={function(){
                            return <p>Not found</p>
                        }} />
                    </Switch>

                </main>
            </Router>
        );
    }
}

export default App;