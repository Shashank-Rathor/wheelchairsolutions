/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';

const BannerComponent = () => {
    return (
        <div>
            <div className="static-slider10">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="6" className="align-self-center text-center">
                            <span className="label label-rounded label-inverse">Creating Brands</span>
                            <h1 className="title">Social Platforms</h1>
                            <h6 className="subtitle op-8">Connect to our social media to be updated about offers and news.</h6>

                            <div className="round-social light">
                                <a href="https://www.facebook.com/rehamoexperiencestore/" className="link"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/rehamocares?lang=en" className="link"><i className="fa fa-twitter"></i></a>
                                <a href="https://www.instagram.com/rehamo.shop/?hl=en" className="link"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UC3QpAjsBT6SGFbUb0Dr6cUg" className="link"><i className="fa fa-youtube"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default BannerComponent;
