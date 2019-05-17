import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

// import React from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
// import './css/style.css';
// import Home from './components/Home';
// import Login from './components/Login';
// import {AuthProvider} from './components/Auth';
// import PrivateRoute from './components/PrivateRoute';

// // import Navbar from './components/Navbar';
// // import Details from './components/Details';
// // import Meals from './components/Meals';
// // import Drinks from './components/Drinks';
// // import Complements from './components/Complements';
// // import Breakfastfood from './components/Breakfastfood';
// // import Menu from './components/Menu';
// // import BreakfastDrinks from './components/BreakfastDrinks';

// //BQ

// // class App extends React.Component{
// //   render() {
// //     return (
// //       <BrowserRouter>
// //     <div className="App">
// //     {/* <Navbar/> */}
// //     <Login />
// //     <Menu/>
// //     <Details/>
// //     <Route exact path="/meals" component={Meals}/>

// //     <Route exact path="/breakfastfood" component={Breakfastfood}/>
// //     <Route exact path="/breakfastdrinks" component={BreakfastDrinks}/>
// //     <Route exact path="/drinks" component={Drinks}/>
// //     <Route exact path="/complements" component={Complements}/>
// //     </div>
// //     </BrowserRouter>
// //   );
// // }
// // }

// const App = () => {
//   return (
//     <AuthProvider>
//     <BrowserRouter>
//     <div className="App">
//       <PrivateRoute exact path="/" component={Home} />
//       <Route exact path="/login" component={Login} />      
//     </div>
//     </BrowserRouter>
//     </AuthProvider> 
//   )
// }

// export default App;
