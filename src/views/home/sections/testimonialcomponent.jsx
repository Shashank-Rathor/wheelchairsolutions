/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from '../../../assets/images/testimonial/1.jpg';
import img2 from '../../../assets/images/testimonial/2.webp';
import img3 from '../../../assets/images/testimonial/3.jpg';
import img4 from '../../../assets/images/testimonial/4.png';
import img5 from '../../../assets/images/testimonial/5.png';
import img6 from '../../../assets/images/testimonial/6.png';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TestimonialComponent = () => {
    return (
            <div className="testimonial3 spacer bg-black" >
            <Container style={{marginBottom: '40'}}>
                <Row className="justify-content-center">
                    <Col md="7" className="text-center">
                        <h2 className="title" style={{color: 'white'}}>Check what our Customers are Saying</h2>
                        <h6 className="subtitle">Listen to the experience of customers who used our products.</h6>
                    </Col>
                </Row>
            </Container>
            <Carousel responsive={responsive}>
            <div>
            <Card className="card-shadow">
                <CardBody>
                    <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“I use a Quickie Xenon 2 Wheelchair which I bought from them in 2016. Just visited their new store for the first time and I was very happy to see the huge range of aids and appliances they have on sale to help deal with a range of physical challenges and disabilities. I have been using a wheelchair now for 35 years and am thrilled that we finally we have a store like this in Bangalore. I would urge you to visit and check out the fantastic range of items for sale, some of which are made in India and some which are imported. Please do spread the word among family and friends.

<br/>I must mention Mr. Naveen who helped me choose and buy my chair with the correct measurements and has helped to keep in in top shape all this time. I wish him and the entire team at Rehamo the very best in the days and years ahead.”</h6>
                    <div className="d-flex no-block align-items-center">
                        <span className="thumb-img"><img src={img6} alt="wrapkit" className="circle" /></span>
                        <div className="m-l-20">
                            <h6 className="m-b-0 customer">Prakash Aswani</h6>
                            <div className="font-10">
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
            <div><Card className="card-shadow">
                <CardBody>
                    <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“This  is a store where product selling isn't focused on. Staff here provides you the solution according to your condition which I feel was the best part.I found the right product and right people.
                    Thank you team Rehamo”</h6>
                    <div className="d-flex no-block align-items-center">
                        <span className="thumb-img"><img src={img3} alt="wrapkit" className="circle" /></span>
                        <div className="m-l-20">
                            <h6 className="m-b-0 customer">ratnesh pareek</h6>
                            <div className="font-10">
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
            <div>  <Card className="card-shadow">
                  <CardBody>
                      <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“I'm from hyderabad basically and I'm into wheelchair basketball. I got a wheel chair from Rehamo. Staff is really friendly and supportive especially Deepika. Really like the atmosphere of the showroom. I'm expecting Rehamo to open up in Hyderabad also, so that it will be convenient and helpful for me and many people like me.”</h6>
                      <div className="d-flex no-block align-items-center">
                          <span className="thumb-img"><img src={img2} alt="wrapkit" className="circle" /></span>
                          <div className="m-l-20">
                              <h6 className="m-b-0 customer">Dharavath Suresh</h6>
                              <div className="font-10">
                                  <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                  <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                  <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                  <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                  <a href="" className="text-success"><i className="fa fa-star"></i></a>
                              </div>
                          </div>
                      </div>
                  </CardBody>
              </Card>
              </div>
            <div>
            <Card className="card-shadow">
                <CardBody>
                    <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“I went to buy a wheelchair here. They have a very big selection of wheelchairs including active wheelchairs, semi active wheelchairs, sports wheelchairs, pediatric wheelchairs etc. They offer to make customized wheelchairs also, which is made to measure. They follow WHO standard assessment and is very thorough. I have not seen such a showroom in Bangalore before. Very well maintained.”</h6>
                    <div className="d-flex no-block align-items-center">
                        <span className="thumb-img"><img src={img1} alt="wrapkit" className="circle" /></span>
                        <div className="m-l-20">
                            <h6 className="m-b-0 customer">Ajay Sathyanarayan</h6>
                            <div className="font-10">
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card className="card-shadow">
                <CardBody>
                    <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“Very nice place for special people. All equipments are available. Good professional staffs for guidance. The management takes care of the clients. All the devices here can also be customised according to your needs.”</h6>
                    <div className="d-flex no-block align-items-center">
                        <span className="thumb-img"><img src={img4} alt="wrapkit" className="circle" /></span>
                        <div className="m-l-20">
                            <h6 className="m-b-0 customer">Sapna mehta</h6>
                            <div className="font-10">
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>
            <div>
            <Card className="card-shadow">
                <CardBody>
                    <h6 className="font-light m-b-30" style={{textAlign: 'justify'}}>“A must visit place. The first of its kind showroom in India where one can get all range of world class quality products for differently abled and senior citizens. Very polite staffs and management. I was astonished seeing the concept of the showroom. The customization of equipments as per the need and suitability of the customer is a wonderful thing with REHAMO. Great work by the owners.”</h6>
                    <div className="d-flex no-block align-items-center">
                        <span className="thumb-img"><img src={img5} alt="wrapkit" className="circle" /></span>
                        <div className="m-l-20">
                            <h6 className="m-b-0 customer">Om Nath Bihari</h6>
                            <div className="font-10">
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                                <a href="" className="text-success"><i className="fa fa-star"></i></a>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
            </div>

            </Carousel>
            </div>
    );
}

export default TestimonialComponent;
