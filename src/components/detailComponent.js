import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,BreadcrumbItem,Breadcrumb,
} from "reactstrap";
import { useLocation ,Link} from "react-router-dom";

const Detail_girlComponent =({girl})=> {
  // console.log(girl);
  // const location = useLocation();
  // const { girl } = location.state || {};
  
    if (girl != null)
      return (
        <>
          <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
          <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{girl.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12"><h3>The Girl Everyone Desires</h3><hr/></div>
    </div>
        <div className="container">
          <Card className="m-0">
            <div className="row g-4">
              
              {/* row with gap 4*4 pixels*/}
              <div className="col-12 col-md-9">
                {/* There will be total 12 columns in total and the div will occupy 9 of them*/}
                <CardImg width="100%" src={girl.image}alt="there suupposed to be an image"/>
              </div>
              <div className="col-12 col-md-3 ">
                <CardText className="p-3">{girl.comments}</CardText>
              </div>
            </div>
          </Card>
        </div>
        </>
      );
    else return null;
  }


export { Detail_girlComponent };
