import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent.js";
import Hello from "./components/class/Hello.js";

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Hello myId={"DE170429"} myAge="23" a={10} b={5} />
//       <Menu dishes={DISHES} />
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import GreetingContainer from "./components/class/GreetingContainer.js";
import RandomUser from "./components/class/RandomUser.js";
import Main from "./components/MainComponent.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} /> */}
        <div className="App">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
