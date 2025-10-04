import React from "react";
import { Card, CardImg ,CardText,CardBody} from "reactstrap";


const RenderItem = ({item}) => {
    console.log('invoked');
    if (item != null)
        return (
        <div className="container">
          <Card className="m-0">
            <div className="row g-4">
              
              {/* row with gap 4*4 pixels*/}
              <div className="col-12 col-md-9">
                {/* There will be total 12 columns in total and the div will occupy 9 of them*/}
                <CardImg width="100%" src={item.image} />
              </div>
                        <div className="col-12 col-md-3 ">
                            <CardBody>
                                
                <CardText className="p-3">{item.comments}</CardText>
                            </CardBody>
              </div>
            </div>
          </Card>
        </div>
      );
    }
    function Home({girl}) {
    console.log( girl.comments );
    return (
        <div className="container">
            <Card className="col-12 col-xxl-9 mx-auto">
                <CardImg calssname="" src="./assets/images/honor.jpg"/>
            </Card>
            <div className="row align-items-start">
                
            <div className="col-12 col-md-12 m-1">
<RenderItem item={girl}/>
            </div>
            </div>
        </div>
    );
}

export default Home;