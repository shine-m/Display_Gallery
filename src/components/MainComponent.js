import Menu from "./MenuComponent";
import { girlsList } from '../shared/girlsList';
import { comments } from "../shared/comments";
import { Component } from 'react';
import { Detail_girlComponent } from "./detailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate,useParams } from 'react-router-dom';
// import Contact from './ContactComponent';
import { AboutUs } from "./AboutUs";
import Contact from "./Contact";


import DeleteForm from "./deleteform";

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
 GirlwithId = () => {
      const { girlId } = useParams();
      console.log("hello",this.state.girls.filter((girl) => girl.id === parseInt(girlId, 10))[0] );
      return <Detail_girlComponent girl={this.state.girls.filter((girl)=>girl.id === parseInt(girlId,10))[0]}/>;//match.params.girlId  is a string passed here, and 10 is 10 based mumber we want to get
    }
  render() {

    const HomePage = (props) => {
      return (<Home girl={this.state.girls.filter((girl) => girl.featured)[0]}/>);
    }

   
      return (
          <div className="container">
          <Header />

          {/* <DeleteForm/> */}
  
          <Routes>
            <Route path='/home' element={<HomePage />}/>
            <Route path="/menu/:girlId" element={<this.GirlwithId/>}/>
            <Route path='/menu' element={<Menu girls={this.state.girls} />} />
            <Route path="/aboutus" element={<AboutUs/>}/>
            <Route path='/detail' element={<Detail_girlComponent />} />
            <Route path='/contact' element ={<Contact/>}/>
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
