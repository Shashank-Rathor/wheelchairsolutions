/* eslint-disable */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import LOGO from '../../assets/images/logos/logo2.png';

const Footer = () => {
    return (
        <div className="footer4 b-t spacer" id="footer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Address</h5>
                        <p> 374, 19th Main Rd, 1st Block, Rajajinagar, Bengaluru, Karnataka 560010</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Phone</h5>
                        <p>Mobile : <br/> +91 9742702222 <br/> +91 9148111031</p>
                    </Col>
                    <Col lg="3" md="6" className="m-b-30">
                        <h5 className="m-b-20">Email</h5>
                        <p>Office : <br/>customercare@rehamo.com</p>
                    </Col>
                    <Col lg="3" md="6">
                        <h5 className="m-b-20">Social</h5>
                        <div className="round-social light" >
                            <a href="https://www.facebook.com/rehamoexperiencestore/" className="link" style={{lineHeight: "0"}}><i className="fa fa-facebook"></i></a>
                            <a href="https://twitter.com/Rehamo58959785" className="link" style={{lineHeight: "0"}}><i className="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/rehamo_rehabandmobility/" className="link" style={{lineHeight: "0"}}><i className="fa fa-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UC3QpAjsBT6SGFbUb0Dr6cUg" className="link" style={{lineHeight: "0"}}><i className="fa fa-youtube"></i></a>
                        </div>
                    </Col>
                </Row>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14">
                                <a href="https://www.rehamo.com/shop/Wheelchairs/All">
                                <img style={{width:"200px"}} src={LOGO}/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="f4-bottom-bar">
                    <Row>
                        <Col md="12">
                            <div className="d-flex font-14">
                                <div className="m-t-10 m-b-10 copyright">All Rights Reserved by Rehamo.</div>
                               <div className="links ml-auto m-t-10 m-b-10">
                                    <Link className="p-10" to={"/about"}>About Us</Link>
                                    <Link className="p-10" to={"/privacy"}>Privacy Policy</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
export default Footer;
