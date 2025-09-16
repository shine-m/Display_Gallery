import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

const Detail_girlComponent =(props)=> {
  

  
    if (props.girl != null)
      return (
        <div className="container">
          <Card className="m-0">
            <div className="row g-4">
              
              {/* row with gap 4*4 pixels*/}
              <div className="col-12 col-md-9">
                {/* There will be total 12 columns in total and the div will occupy 9 of them*/}
                <CardImg width="100%" src={props.girl.image} />
              </div>
              <div className="col-12 col-md-3 ">
                <CardText className="p-3">{props.girl.comments}</CardText>
              </div>
            </div>
          </Card>
        </div>
      );
    else return (<div></div>);
  }


export { Detail_girlComponent };
