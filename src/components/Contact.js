import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Button, Col, Input ,Label, FormFeedback} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component{


    constructor(props) {
        super(props);
        this.state = {
            firstname: "", lastname: "", tel: "", email: "", agreed: "", message: "", contactType: "", touched: {
                firstname: false,
                lastname: false,
                email: false,
                tel:false
            }
        }
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validate = this.validate.bind(this);
    }
    handleSubmit(event) {
        console.log(JSON.stringify(this.state));
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
         touched:{   ...this.state.touched, [field]: true
        }
        })
    }
    validate(firstname, lastname, tel, email) {
        const error = {
            firstname: "",
            lastname: '', tel: '', email: ''
        };
        if (this.state.touched.firstname && firstname.length < 3) error.firstname = 'first name must be grater then 2 characters';
        else if (this.state.touched.firstname && firstname.length > 10) error.firstname = 'first name must be less than 11 characters';
        if (this.state.touched.lastname && lastname.length < 3) error.lastname = 'last name must be grater then 2 characters';
        else if (this.state.touched.lastname && lastname.length > 10) error.lastname = 'last name must be less than 11 characters';

        const regex = /^\d + $/;
        if (this.state.touched.tel && !regex.test(tel))
            error.tel = "telephone number shoud contain digits only";

        if (this.state.touched.email && email.split('').filter((x) => x === '@').length !== 1)
            error.email = "email should contain atleast a @";

        return error;

        
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

        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.tel, this.state.email);
        return <div className="row row-container">
            <div className="col-12"><h5>Send Us Your Feedback</h5></div>
            <div className="col-12 col-md-9">
                
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <label htmlFor="firstname" md={2}>firstName</label><Col md={10}>
                            <Input type="text" id='firstname' placeholder="first name" name="firstname" value={this.state.fname}
                                valid={errors.firstname === ''}
                                invalid={errors.firstname !==''}
                                onChange={this.handleInputChange} onBlur={this.handleBlur('firstname')} />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="lastname" md={2}>Last Name</label><Col md={10}>
                            <Input type="text" id='lastname' placeholder="last name" name="lastname" value={this.state.lname} valid={errors.lastname === ''}
                                invalid={errors.lastname !==''}onChange={this.handleInputChange}onBlur={this.handleBlur('lastname')} />
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="telnum" md={2}>Tel Number</label><Col md={10}>
                            <Input type="tel" id='telnum' placeholder="+880" name="tel" value={this.state.tel}
                                valid={errors.tel === ''}
                                invalid={errors.tel !==''}onChange={this.handleInputChange} onBlur={this.handleBlur('tel')} />
                            <FormFeedback>{errors.tel}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <label htmlFor="email" md={2}>email</label><Col md={10}>
                        <Input type="tel" id='email' placeholder="email@" name="email" value={this.state.email}valid={errors.email=== ''}
                                invalid={errors.email!==''} onChange={this.handleInputChange}onBlur={this.handleBlur('email')}/><FormFeedback>{errors.email}</FormFeedback>
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