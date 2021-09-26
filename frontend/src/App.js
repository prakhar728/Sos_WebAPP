import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
            <Switch>

                <Route exact path="/">
                    <Login></Login>
                </Route>

                <Route exact path="/signup">
                    <Signup></Signup>
                </Route>

                <Route exact path="/error">
                    <Error></Error>
                </Route>

                <Route exact path="/home">
                    <Home></Home>
                </Route>

                <Route component={Error} />

            </Switch>    
        </Router>
	);
}

export default App;