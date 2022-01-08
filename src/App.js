import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewTour from "./components/AddNewTour/AddNewTour";
import AllBooking from "./components/AllBooking/AllBooking";
import Booking from "./components/Booking/Booking";
import Destination from "./components/Destination/Destination";
import Footer from "./components/Footer/Footer";
import FooterCopy from "./components/FooterCopy/FooterCopy";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MyBooking from "./components/MyBooking/MyBooking";
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
          <PrivateRoute path="/travelbooking/:id">
            <TravelBooking></TravelBooking>
          </PrivateRoute>

          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>

          <Route path="/mybooking">
            <MyBooking></MyBooking>
          </Route>
          <Route path='/allbooking'>
            <AllBooking></AllBooking>
          </Route>

          <Route path='/addnewtour'>
            <AddNewTour></AddNewTour>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>

        <Footer></Footer>
        <FooterCopy></FooterCopy>
      </Router>
    </AuthProvider>
  );
}

export default App;
