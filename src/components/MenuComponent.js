import React from "react";
// import { Media } from 'reactstrap';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";


 



  function Menu(props) {
    // here col 12 means the whole page width will be 12 columns and  12 is the highest value
    const gallary = props.girls.map((girl) => (
      <div key={girl.id} className="col-12 col-md-6 m-0">
        <Card onClick={() => props.onClick(girl.id)}>
          <CardImg width="100%" src={girl.image} />
          <CardImgOverlay>
            <CardTitle>{girl.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">{gallary}</div>
      </div>
    );
  }

export default Menu;
