import { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Detail_girlComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card className="m-0">
          <div className="row g-4">
            {" "}
            {/* row with no gap 4 pixels*/}
            <div className="col-12 col-md-9">
              {/* There will be total 12 columns in total and the div will occupy 9 of them*/}
              <CardImg width="100%" src={this.props.girl.image} />
            </div>
            <div className="col-12 col-md-3 ">
              <CardText className="p-3">{this.props.girl.comments}</CardText>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export { Detail_girlComponent };
