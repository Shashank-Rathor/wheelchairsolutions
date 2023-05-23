import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import img0 from '../../../assets/images/portfolio/img0.webp';


const DetailComponent = () => {
  return(
    <div>
        <div className="wrapper spacer bg-black">
            <Container>
                <Row className="testi3 m-t-40 justify-content-center">

                    <Col lg="4" md="6" className="m-b-20">
                    <Flippy
                      flipOnHover={true}
                      flipDirection="horizontal" >
                      <FrontSide className="front1" >
                      <h1 style={{color: 'white'}}>Importance</h1>
                      <h1 style={{color: 'white'}}> Of  </h1>
                      <h1 style={{color: 'white'}}>Wheelchair</h1>
                      </FrontSide>
                      <BackSide className="back">
                      <div className="implist">
                        <ul>
                        <li>Appropriate Wheelchair provides users the freedom to move around.</li>
                        <li>With a right wheelchair you would be independent mobility and not having to depend for assistance.</li>
                        <li>Increases Self-esteem, confidence, and increases the quality of life.</li>
                        <li>You would be active among your family and community where you will be interactive with people.</li>
                        <li>A right wheelchair will help you to maintain posture and prevent postural deformities, it also helps to have increased seating comfort where one can use for longer periods. </li>

                        </ul>
                      </div>
                      </BackSide>
                      </Flippy>
                    </Col>
                    <Col lg="4" md="6">
                        <Flippy
                        flipOnHover={true}
                        flipDirection="horizontal">
                        <FrontSide className="front2" >
                        <h1 style={{color: 'white'}}>How to</h1>
                        <h1 style={{color: 'white'}}> Choose a</h1>
                        <h1 style={{color: 'white'}}>Wheelchair</h1>
                        </FrontSide>
                        <BackSide className="back">
                        <div className="rightlist">
                          <ul>
                          <li>Time: Depending on the duration on use of the wheelchair and dependability on the chair the type of wheelchair can be selected. </li>
                          <li>Seating posture: Current posture condition and support required has to considered before finalizing the features of the wheelchairs.</li>
                          <li>Condition: Based on the diagnosis and condition best supports required will understood.</li>
                          <li>Age: Which will help us to understand dependability on wheelchair and duration of usage</li>
                          <li>Transfer method: The feature of the wheelchair has to be considered based on how the user transfers in and out of wheelchair.</li>

                          </ul>
                        </div>
                        </BackSide>
                        </Flippy>
                    </Col>
                    <Col lg="4" md="6">
                      <Flippy
                      flipOnHover={true}
                      flipDirection="horizontal">
                      <FrontSide className="front3" >
                      <h1 style={{color: 'white'}}>Categories</h1>
                      <h1 style={{color: 'white'}}> Of</h1>
                      <h1 style={{color: 'white'}}>Wheelchair</h1>
                      </FrontSide>
                      <BackSide className="back">
                        <div className="list">

                      <h3>Categories </h3> <h3> of </h3> <h3> Wheelchair</h3>
                          <ul>
                          <li>Active Wheelchair</li>
                          <li>Semi Active Wheelchair</li>
                          <li>Transit Wheelchair</li>
                          <li>Sports Wheelchair</li>
                          <li>Power Wheelchair</li>
                          <li>Paediatric  Wheelchair</li>
                          </ul>
                        </div>
                      </BackSide>
                      </Flippy>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  );
}

export default DetailComponent;
