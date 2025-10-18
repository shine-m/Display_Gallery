import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Col, Input ,Label} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component{


    constructor(props) {
        super(props);
        this.state = {
            firstname: "", lastname: "", tel: "", email: "", agreed: "", message: "", contactType: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit(event) {
        console.log(JSON.stringify(this.state));
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return <div className="row row-container">
            <div className="col-12"><h5>Send Us Your Feedback</h5></div>
            <div className="col-12 col-md-9">
                
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <label htmlFor="firstname" md={2}>firstName</label><Col md={10}>
                        <Input type="text" id='firstname' placeholder="first name" name="firstname" value={this.state.fname} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="lastname" md={2}>Last Name</label><Col md={10}>
                        <Input type="text" id='lastname' placeholder="last name" name="lastname" value={this.state.lname} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="telnum" md={2}>Tel Number</label><Col md={10}>
                        <Input type="tel" id='tel' placeholder="+880" name="tel" value={this.state.tel} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="email" md={2}>email</label><Col md={10}>
                        <Input type="tel" id='email' placeholder="email@" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 4, offset: 2 }}>
                            <FormGroup check>
                                
                                <Label check >
                                    <input type="checkbox" name="agreed" checked={this.state.agreed} onChange={this.handleInputChange}/>{'  '}
                            <strong>Should we contact You?</strong>
                            </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size: 3, offset: 1 }}>
                            <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                            <option>tel</option>
                            <option>email</option>
                            </Input>
                        </Col>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Add your valuable opinion here</Label>
                            <Col md={10}>
                            
                                <Input type="textarea" name="message" id="message" rows="12" value={this.state.message} onChange={this.handleInputChange}/>
                                {/* keep sharp eye on the style attribute, its rows , not row  */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{ size: 6, offset: 2 }}>
                            <Button type="submit" color="primary ">Send Feedback</Button></Col>
</FormGroup>
                    </FormGroup>
                </Form>
</div>
        </div>;
    }
}

export default Contact;