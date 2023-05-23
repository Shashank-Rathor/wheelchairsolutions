import React from 'react';
import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
import ReactGA from 'react-ga';

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';

const ContactComponent = (props) => {

  const[show,setShow] = React.useState(false);

const submitMail = (e) => {
  e.preventDefault();

  ReactGA.event({
           category: 'Contact',
           action: 'Clicked Button',
       });

     emailjs.sendForm('service_j469yju','template_6x6clz3', e.target, 'user_ynNZxMuwAewsmAq1Up9BB')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       e.target.reset();
}
const onChange = () => {
  setShow(true);
}
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Contact Form</h1>
                            <h6 className="subtitle">Having doubts on what kind of wheelchair to chose in the array of wheelchairs available on the market?
                            Then fret not as we have a wheelchair expert who has years of experience and can guide you through the wheelchair and provide you with an option which suits your body anatomy.</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="contact1">
                <Row>
                    <Container>
                        <div className="spacer">
                            <Row className="m-0">
                                <Col lg="8">
                                    <div className="contact-box p-r-40">
                                        <h4 className="title">Quick Contact</h4>

                                        <form className="contact-form" onSubmit={submitMail}>
                                        <input type="text" name="name" required placeholder="Name"style={{marginRight: '50px', marginBottom: '50px'}}/>
                                        <input type="text" name="phone" required placeholder="Phone"style={{marginRight: '50px', marginBottom: '50px'}}/>
                                        { (props) ? <input type="text" name="product"  value={props.prod} placeholder="Product"style={{marginRight: '50px', marginBottom: '50px'}}/> : <input type="text" name="product"  placeholder="Product"style={{marginRight: '50px', marginBottom: '50px'}}/>}
                                        <select id="type" name="type" style={{width: '210px',marginRight: '50px', marginBottom: '50px'}}>
                                        <option value="Enquiry">Enquiry</option>
                                        <option value="Repair">Service</option>
                                        <option value="Appointment">Assessment</option>
                                        </select>
                                        <textarea name="message" required placeholder="Message"style={{marginRight: '50px', marginBottom: '50px'}}/>
                                       <input type="submit" className="btn btn-danger-gradiant m-t-20 btn-arrow" value="Send" />
                                      <GoogleReCaptchaProvider reCaptchaKey="6LdDcBcaAAAAAE9xltRwMbWFVh5aAjlWawiALhFW">
                                      <GoogleReCaptcha onVerify={onChange} />
                                      </GoogleReCaptchaProvider>
                                        </form>

                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div className="detail-box p-40 bg-info">
                                        <h2 className="text-white">Rehamo Headquarters</h2>
                                        <p className="text-white m-t-30 op-8">+91 9742702222
                                            <br /> customercare@rehamo.com</p>
                                        <p className="text-white op-8">374, 19th Main Rd, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </div>
        </div>
    );
}

export default ContactComponent;
