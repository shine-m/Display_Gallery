import{Navbar, NavbarBrand} from 'reactstrap'
import Menu from "./MenuComponent";
import { girlsList } from '../shared/girlsList';
import { Component } from 'react';
import { Detail_girlComponent } from "./detailComponent";


class Main extends Component{
  constructor(props) {
    
    super(props);

    this.state = {
        girls: girlsList,
        selectedGirl:null,
    }
    }
      onGirlSelect(girlId) {
    this.setState({ selectedGirl: girlId });
  }

  render() {
      return (
          <div className="container">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Resonating from app confusion</NavbarBrand>
        </div>
      </Navbar>
              <Menu girls={this.state.girls} onClick = {(girlId)=>this.onGirlSelect(girlId)} /> 
              <Detail_girlComponent girl= {this.state.girls.filter((girl)=>girl.id === this.state.selectedGirl)[0]} />
    </div>
  );
  }
}



export default Main;
