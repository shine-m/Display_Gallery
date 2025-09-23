import { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component{

  render() {
    return (
        <BrowserRouter>
    <div className="App">
     <Main/>
    </div>
        </BrowserRouter>
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
