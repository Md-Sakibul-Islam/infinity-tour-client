import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import TravelBooking from "./components/TravelBooking/TravelBooking";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/travels">
            <Destination></Destination>
          </Route>
          <PrivateRoute path='/travelbooking/:id'>
            <TravelBooking></TravelBooking>
          </PrivateRoute>

          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
