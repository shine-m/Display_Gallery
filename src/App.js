import{Navbar, NavbarBrand} from 'reactstrap'
import './App.css';
import Menu from "./components/MenuComponent";
import { girlsList } from './shared/girlsList';
import { Component } from 'react';


class App extends Component{
  constructor(props) {
    
    super(props);

    this.state = {
      girls:girlsList,
    }
  }
  render() {
      return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Resonating from app confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu girls = {this.state.girls}/> 
    </div>
  );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color='primary'>
//         <div className='container'>
//           <NavbarBrand href='/'>Resonating from app confusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu/> 
//     </div>
//   );
// }

export default App;
