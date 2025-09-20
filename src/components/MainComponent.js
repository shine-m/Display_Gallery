import Menu from "./MenuComponent";
import { girlsList } from '../shared/girlsList';
import { Component } from 'react';
import { Detail_girlComponent } from "./detailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";


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
      <Header/>
              <Menu girls={this.state.girls} onClick = {(girlId)=>this.onGirlSelect(girlId)} /> 
          <Detail_girlComponent girl={this.state.girls.filter((girl) => girl.id === this.state.selectedGirl)[0]} />
          <Footer/>
    </div>
  );
  }
}



export default Main;
