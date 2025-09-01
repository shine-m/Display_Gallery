import React, { Component } from "react";
import { Media } from 'reactstrap';

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const gallary = this.props.girls.map((girl) => (
            <div key={girl.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object src={girl.image} />
                        </Media>
                        <Media body className="ml-5">
                            
<Media heading> {girl.name}</Media>
                    </Media>
        </Media>
    </div>
        ));
        return (
            <div className="container">
                <div className="row">
                    <Media list> {gallary}</Media>
                </div>
</div>
        );
    }
}
export default Menu;