import './App.css';
import AdminNavbar from './components/Navbar/AdminNavbar';
import Dashboard from './components/web_admin/Dashboard';
import Login from './components/web_admin/Login';
import Addmanager from './components/web_admin/Addmanager';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
       <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="/addmanager">
            <Addmanager />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </>
  );
}

export default App;