import React, { Component } from "react";
import{Navbar, NavbarBrand,Container} from 'reactstrap'


class Header extends Component{

    render() {
        return (<>
<Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Resonating from app confusion</NavbarBrand>
        </div>
            </Navbar>
            <Container className="p-5 mb-4 bg-light rounded-3">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-12">
                            <h1>Here You Come For The Best Quality Girl</h1>
                            <p>convert this into an illustration using hyper-realistic enamel color, ensuring the best image quality. make her body well nourished ,gorgeous and stylish like goddess of love . she's taking a dip , got a bit wet and was posing for professional photo contest as if her beige crop top was taken away as she wore an unbuttoned lab-apron holding an Arabian lantern. she had earrings and a nose-pin . illuminate the background with soft , diffused daylight of the mid-day and make the image smooth and clean</p>
                        </div>
                    </div>
                </div>
            </Container>
        </>);
    }
}

export default Header;