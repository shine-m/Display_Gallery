import React, { Component } from "react";
// import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
selectedGirl: null
        }
    }

    onGirlSelect(girl) {
        this.setState({selectedGirl : girl});
    }
    renderOnSelect(girl) {
        if (girl != null) return (<Card>
            <CardImg width="100%" src={girl.image} />
        </Card>);
        else return (<div></div>);
    }
    render() {
        // here col 12 means the whole page width will be 12 columns and  12 is the highest value
        const gallary = this.props.girls.map((girl) => (
            <div key={girl.id} className="col-12 col-md-6 m-0">
                <Card onClick={()=>this.onGirlSelect(girl)}>
                    <CardImg width="100%" src={girl.image} />
                    <CardImgOverlay>
                        <CardTitle>{girl.name}</CardTitle>
                    </CardImgOverlay>
              </Card>
                        
    </div>
        ));

        return (
            <div className="container">
                <div className="row">
                  {gallary}
                </div>
                <div className="col-12 col-md-11 m-1">
                    {this.renderOnSelect(this.state.selectedGirl)}
                </div>
</div>
        );
        // this one is for  Media implementation ------------------------------------------------------------------------------------------------------------
//     render() {
//         const gallary = this.props.girls.map((girl) => (
//             <div key={girl.id} className="col-12 mt-5">
//                 <Media tag="li">
//                     <Media left middle>
//                         <Media object src={girl.image} />
//                         </Media>
//                         <Media body className="ml-5">
                            
// <Media heading> {girl.name}</Media>
//                     </Media>
//         </Media>
//     </div>
//         ));
//         return (
//             <div className="container">
//                 <div className="row">
//                     <Media list> {gallary}</Media>
//                 </div>
// </div>
//         );
    }
}
export default Menu;