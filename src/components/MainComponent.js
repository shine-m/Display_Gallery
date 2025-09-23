import Menu from "./MenuComponent";
import { girlsList } from '../shared/girlsList';
import { comments } from "../shared/comments";
import { Component } from 'react';
import { Detail_girlComponent } from "./detailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from './ContactComponent';


class Main extends Component{
  constructor(props) {
    
    super(props);

    this.state = {
      girls: girlsList,
      comments:comments,
        // selectedGirl:null,
    }
    }
  //     onGirlSelect(girlId) {
  //   this.setState({ selectedGirl: girlId });
  // }

  render() {

    const HomePage = () => {
      return (<Home/>);
    }

      return (
          <div className="container">
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage />}/>
            <Route path='/menu' element={<Menu girls={this.state.girls} />} />
            <Route path='/detail' element={<Detail_girlComponent />} />
            <Route path='/contact' clement ={<Contact/>}/>
            <Route path = '*' element={ <Navigate to ='/menu'/>}/>
            {/* this Navigate to will work as Redirect any invalid path to menu and if we can add replace keywork afterword path  */}
          </Routes>
              {/* <Menu girls={this.state.girls} onClick = {(girlId)=>this.onGirlSelect(girlId)} /> 
          <Detail_girlComponent girl={this.state.girls.filter((girl) => girl.id === this.state.selectedGirl)[0]} /> */}
          <Footer/>
    </div>
  );
  }
}



export default Main;
