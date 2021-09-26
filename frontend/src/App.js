
import Home from './components/Home';
import Error from './components/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SawoLogin from './components/sawoLogin';
function App() {
	return (
		<Router>
            <Switch>

                <Route exact path="/">
                    <SawoLogin />
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