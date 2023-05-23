/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';



import wheel1 from '../../../assets/images/features/wheels/img1.webp';
import wheel2 from '../../../assets/images/features/wheels/img2.webp';
import wheel3 from '../../../assets/images/features/wheels/img3.webp';
import wheel4 from '../../../assets/images/features/wheels/img4.webp';
import wheel5 from '../../../assets/images/features/wheels/img5.webp';
import wheel6 from '../../../assets/images/features/wheels/img6.webp';
import wheel7 from '../../../assets/images/features/wheels/img7.webp';
import wheel8 from '../../../assets/images/features/wheels/img8.webp';
import wheel9 from '../../../assets/images/features/wheels/img9.jpg';

import {Link} from "react-router-dom";

import { Carousel } from 'react-bootstrap';

const FeatureComponent = ({activekey}) => {
  const [key,setkey] = React.useState(activekey)

  let comp = null;

  switch(key){
    case 1:
    comp =
    <>
    <Container style={{marginBottom: '40px'}}>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Customization</h1>
              </Col>
          </Row>
      </Container>
          <Container className="feature30">
              <Row>
                  <Col lg="10">
                  <Carousel className="car">
                  <Carousel.Item interval={1000}>
                  <img
                  className="rounded img-responsive"
                  src={wheel3}
                  alt="First slide"
                  />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                  <img
                className="rounded img-responsive"
                  src={wheel2}
                  alt="Third slide"
                  />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                  <img
                  className="rounded img-responsive"
                  src={wheel9}
                  alt="Third slide"
                  />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                  <img
                  className="rounded img-responsive"
                  src={wheel4}
                  alt="First slide"
                  />
                  </Carousel.Item>
                  <Carousel.Item interval={1000}>
                  <img
                  className="rounded img-responsive"
                  src={wheel5}
                  alt="First slide"
                  />
                  </Carousel.Item>
                  </Carousel>

                  </Col>
                  <Col lg="5" md="7" className="text-center wrap-feature30-box">
                      <Card className="card-shadow">
                          <CardBody>
                              <div className="p-20">
                                  <p>We provide customization of premium wheelchairs as per the requirement after we do a complete assessment of your body. Our customization
                                  experts will listen to the problems which you are facing and with their expertise we customize the wheelchair so that you would not face any problems while using the wheelchair.</p>
                              </div>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
          </Container>
          </>
    break;
    case 2:
    comp =
    <>
    <Container style={{marginBottom: '40px'}}>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Services</h1>
              </Col>
          </Row>
      </Container>
          <Container className="feature30">
              <Row>
                  <Col lg="10">
                  <img
                  className="rounded img-responsive"
                  src={wheel6}
                  alt="First slide"
                  />
                  </Col>
                  <Col lg="5" md="7" className="text-center wrap-feature30-box">
                      <Card className="card-shadow">
                          <CardBody>
                              <div className="p-20">
                                  <p>We accept repairs of select wheelchairs that are purchased from our outlet. Our repair team are experienced where they find the faults and will let
                                  you know what issue is being faced by the wheelchair and provide you with solution. After the approval, the team will repair the wheelchair and thereafter, you can use the wheelchair as it was when purchased new.</p>
                              </div>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
          </Container>
          </>
    break;
    case 4:
    comp =
    <>
    <Container style={{marginBottom: '40px'}}>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Assessment</h1>
              </Col>
          </Row>
      </Container>
          <Container className="feature30">
              <Row>
                  <Col lg="10">
                  <img
                  className="rounded img-responsive"
                  src={wheel7}
                  alt="First slide"
                  />
                  </Col>
                  <Col lg="5" md="7" className="text-center wrap-feature30-box">
                      <Card className="card-shadow">
                          <CardBody>
                              <div className="p-20">
                                  <p>Once booked an appointment after enquiry of the wheelchair, our team will assess your issues and go through the list of wheelchairs that is suitable for you and recommend the best so that it is long-lasting and comes to your assistance for continuous usage. For the assessment,
                                  one should be physically present at the store which should be taken with a prior appointment.</p>
                              </div>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
          </Container>
          </>
    break;
    case 5:
    comp =
    <>
    <Container style={{marginBottom: '40px'}}>
          <Row className="justify-content-center">
              <Col md="7" className="text-center">
                <h1 className="title font-bold">Appointment</h1>
              </Col>
          </Row>
      </Container>
          <Container className="feature30">
              <Row>
                  <Col lg="10">
                  <img
                  className="rounded img-responsive"
                  src={wheel8}
                  alt="First slide"
                  />
                  </Col>
                  <Col lg="5" md="7" className="text-center wrap-feature30-box">
                      <Card className="card-shadow">
                          <CardBody>
                              <div className="p-20">
                                  <p>Scheduling an appointment is very easy as you just need to enter the date, time and the reason for appointment. Our Inside Sales Representative will co-ordinate with our expert team and you and will schedule the appointment by communicating with
                                  you and making sure you get the right person to understand the problem and provide a suitable solution.</p>
                              </div>
                          </CardBody>
                      </Card>
                  </Col>
              </Row>
          </Container>
        </>
    break;
  }

    return (
        <div>
            <div className="spacer ">
            {comp}
            </div>
        </div>
    );
}

export default FeatureComponent;
