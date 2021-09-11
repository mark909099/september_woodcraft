import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Homepage from './components/home_page/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { AuthProvider } from './firebase/useAuth';
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginGeneral from './components/login_page/LoginGeneral';
import LoginPasswordless from './components/login_page/LoginPasswordless';
import ConfirmPasswordless from './components/login_page/ConfirmPasswordless';
import Confirmed from './components/login_page/Confirmed';
import GeneralStore from './components/store_page/GeneralStore';
import ProfilePage from './components/profile_page/ProfilePage';
import StoreTablesGeneral from './components/store_page/store_page_tables/StoreTablesGeneral';
import StoreChairsGeneral from './components/store_page/store_page_chairs/StoreChairsGeneral';
import StoreClosetsGeneral from './components/store_page/store_page_closets/StoreClosetsGeneral';
import CartGeneral from './components/cart_page/CartGeneral';
import AboutGeneral from './components/about_page/AboutGeneral';
import ContactGeneral from './components/contact_page/ContactGeneral';
import TermsOfUseGeneral from './components/home_page/footer_page/TermsOfUseGeneral';
import PrivacyPolicyGeneralUser from './components/home_page/footer_page/PrivacyPolicyGeneralUser';

function App() {
  return (
<div>
<ThemeProvider theme={theme}>
<CssBaseline />
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
    <Route exact path="/store">
      <GeneralStore />
    </Route>
    <Route exact path="/profile">
      <ProfilePage />
    </Route>
    <Route exact path="/store_tables">
      <StoreTablesGeneral />
    </Route>
    <Route exact path="/store_chairs">
      <StoreChairsGeneral />
    </Route>
    <Route exact path="/store_closets">
      <StoreClosetsGeneral />
    </Route>
    <Route exact path="/cart">
      <CartGeneral />
    </Route>
    <Route exact path="/about">
      <AboutGeneral />
    </Route>
    <Route exact path="/contact">
      <ContactGeneral />
    </Route>
    <Route exact path="/terms_of_use">
      <TermsOfUseGeneral />
    </Route>
    <Route exact path="/privacy_policy">
      <PrivacyPolicyGeneralUser />
    </Route>
  </Switch>
</Router>
</ThemeProvider>
</div>
  );
}

export default App;
