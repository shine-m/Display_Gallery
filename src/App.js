import { Component } from 'react';
import Main from './components/MainComponent';

class App extends Component{

  render() {
      return (
    <div className="App">
     <Main/>
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
