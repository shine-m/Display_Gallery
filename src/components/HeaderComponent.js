import React, { Component } from "react";
import { Nav,Navbar, NavbarBrand, Container, NavItem, Collapse, NavbarToggler,NavLink } from 'reactstrap'
import { NavLink as RRNavLink} from "react-router-dom";


class Header extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    } 
    
    toggleNav() { this.setState({isNavOpen : !this.state.isNavOpen}); }

    render() {
        return (<>
<Navbar dark color="primary" expand='md'>
        
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className="mr-auto" href='/'><img src="./assets/images/logo.png" height='30' width='30' alt="hot gitl image" />GirlShoP</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen } navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink tag = {RRNavLink}  to="/home">
                            <i className="fa fa-home fa-lg"></i>Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to="/menu">
                            <i className="fa fa-list fa-lg"></i>Menu
                            </NavLink>
                        </NavItem>

                    </Nav>
                    </Collapse>
        
            </Navbar>
            <Container className="p-5 mb-4 bg-light rounded-3">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-12  ">
                            <h1 className=" col-12 col-sm-11 mx-auto d-flex justify-content-center">Here You Come For The Best Quality Girl</h1>
                            <p className="col-12 col-sm-11 mx-auto">These girls present a graceful blend of elegance and modern modesty. Their complexions carry a natural warmth with soft blush tones that highlight their features beautifully. Their eyes are framed with well-defined lashes, giving them an expressive and confident gaze. Their lips, enhanced with muted earthy shades, add a touch of refinement.<br/>

Their outfits showcase relaxed denim ensembles that speak of comfort and understated style, balanced with brown-toned hijabs that drape effortlessly and complete their looks with poise. Their accessories—golden watches, statement cuffs, and subtle chokers—bring a richness that elevates their appearances without overpowering their natural charm.Overall, these girls embody a class of young women who radiate elegance, self-assurance, and a timeless sense of beauty through simplicity and thoughtful details.<br/></p>
                        </div>
                    </div>
                </div>
            </Container>
        </>);
    }
}

export default Header;