/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TeamComponent = (props) => {
    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">What type of wheelchair you need?</h1>
                            <h6 className="subtitle">Explore our wide range of products which includes Active, Semi-active, power, sports wheelchairs which are best in the market. We choose only the best wheelchairs after researching the product thoroughly and provide quality products to our customers.<br/> Now shop online on our new website <a href = "https://rehamo.com/" target='_blank'>www.rehamo.com</a></h6>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer team2">
                <Container>
                    <Row className="m-t-30">
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="pro-pic t2">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                        <Button onClick={props.activeHandler}><i className="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                          <Button onClick={props.activeHandler}><i className="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Active Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Active wheelchairs enables differently-abled people to be more active. These types of wheelchairs make it easier for users where it helps to keep posture better and helps them during to travel easier during their busy schedule. </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t1">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <Button onClick={props.semiactiveHandler}><i class="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                            <Button onClick={props.semiactiveHandler}><i class="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Semi Active Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Semi-Active Wheelchairs are specifically designed for short-term wheelchair users. They can be propelled manually or with assistance. These are designed to accommodate people who suffer from disability and require assistance during mobility. </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t5">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <Button onClick={props.transitHandler}><i class="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                          <Button onClick={props.transitHandler}><i class="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Transit Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Transit wheelchairs are helpful for elderly or disabled people where it helps for easy access to get transferred from one point to another. These chairs normally require attender to propel and hence these wheelchairs do not have large rear wheels compared to other types of wheelchairs.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <Button onClick={props.sportsHandler}><i class="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                              <Button onClick={props.sportsHandler}><i class="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Sports Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Sports wheelchairs come in different shape and sizes and almost all are manually powered. These wheelchairs are specifically designed for various sporting events such as basketball, tennis, and racing and helps athletes in competitive games.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t6">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <Button onClick={props.paediatricHandler}><i class="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                              <Button onClick={props.paediatricHandler}><i class="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Paediatric Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Pediatric Wheelchairs are specifically designed for children. These are designed to accommodate specific mobility disorder that the child is facing and help them to be independent with the assistance of wheelchair assistive technology.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <ul className="list-inline">
                                            <Button onClick={props.powerHandler}><i class="fa fa-scribd fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>tandard</i></Button>
                                          <Button onClick={props.powerHandler}><i class="fa fa-contao fa-2x" aria-hidden="true" style={{textTransform: 'none'}}>ustomized</i></Button>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <h5 className="title font-medium">Power Wheelchair</h5>
                                        <p style={{textAlign: 'justify'}}>Power wheelchairs are electric, battery operated wheelchairs which can be propelled by the user without any requirement of an attender. These wheelchairs are bit heavy as they require battery and motor for mobility. </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
