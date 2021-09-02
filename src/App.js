import Homepage from './components/home_page/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from './firebase/useAuth';

function App() {
  return (
<div>
<Router>
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route exact path="/login">
      <Homepage />
    </Route>
  </Switch>
</Router>
</div>
  );
}

export default App;
