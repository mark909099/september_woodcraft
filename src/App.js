import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Homepage from './components/home_page/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from './firebase/useAuth';
import LoginGeneral from './components/login_page/LoginGeneral';
import LoginPasswordless from './components/login_page/LoginPasswordless';
import ConfirmPasswordless from './components/login_page/ConfirmPasswordless';
import Confirmed from './components/login_page/Confirmed';

function App() {
  return (
<div>
<ThemeProvider theme={theme}>
<Router>
  <Switch>
    <Route exact path="/">
      <Homepage />
    </Route>
    <Route exact path="/login">
      <LoginGeneral />
    </Route>
    <Route exact path="/confirm">
      <ConfirmPasswordless />
    </Route>
    <Route exact path="/confirmed">
      <Confirmed />
    </Route>
  </Switch>
</Router>
</ThemeProvider>
</div>
  );
}

export default App;
