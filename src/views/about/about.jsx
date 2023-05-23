/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import HeaderBanner from '../../components/banner2/banner2';
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";


import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const About = () => {

    return (
        <div>
        <Header />
        <HeaderBanner/>
        <div className="whatsappFooter">
        <span class="tooltiptext">Need help? Chat with us.</span>
          <a href="https://api.whatsapp.com/send?phone=+91 9108740369" className="link"><i className="fa fa-whatsapp fa-2x" style={{color: 'white'}}></i></a>
        </div>
            <div className="spacer">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="10" xs="11" className="text-justify">
                            <h2 className="title"><strong>About Us</strong></h2>
                            <h6 className="subtitle">Wheelchairs are important medical equipment which assists users for mobility. A right wheelchair helps users the flexibility to move around and be independent. Additionally, choosing a right wheelchair will increase self-esteem, confidence and increases quality of life.
<br/><br/>At Rehamo we provide best in class solution and services for specially abled people who are in need of finding a right wheelchair according to the condition (diagnosis) that one faces. Our in-house wheelchair expert who has years of experience will suggest a right wheelchair that will help the end user with providing the best posture management, seating comfort and become independent in their daily lifestyle.
<br/><br/>Our team have immense knowledge on various types of wheelchair available in the market, and we tend to do research and increase the knowledge to provide the best wheelchair for our end users.
<br/><br/>We are one of the leading wheelchair dealers in Bangalore where we provide assistance to children, adults and aged patients who require wheelchair for mobility and daily usage. From past many years we have provided assistance to various people who are in need and have come back with positive results.
</h6>
<h4 className="title"><strong>Why Wheelchair solutions is the website that one need to visit ?</strong></h4>
  <h6 className="subtitle">We have the latest best-in-class wheelchair and we cater to all differently-abled people. Here we cater to different types of wheelchairs for patients and are one-stop solution for users. We are conveniently located at a major area in Bangalore which is easily accessible by basic modes of transportation.
<br/><br/>At Wheelchair Solutions by Rehamo we also provide accessories related to wheelchairs such as wheelchair climbers, battery, commode, cushion etc.
</h6>
<h4 className="title"><strong>How to contact Wheelchair Solutions ?</strong></h4>
<h6 className="subtitle">We are available on social media channels such as Facebook, Twitter, Instagram where you can contact us there and gather the required information.
<br/><br/>You can also visit the contact us page where you just need to provide the details and our Inside Sales Representative will contact you and help you with the information you need.
<br/><br/>Additionally, you can also visit our store where you can connect with the wheelchair expert and clear the doubts as required.
</h6>
<h4 className="title"><strong>About REHAMO</strong></h4>
<h6 className="subtitle">Rehamo is a one-stop solution for all the rehabilitation and mobility products, services, and home healthcare solutions. Our one-stop solution is the first-of-its-kind experience center in the space of rehabilitation and mobility in India, where we customize the aides as per the requirement of the user. We are pioneers in showcasing the integration of technology into everyday life and the effortless independent leaving we aim to offer the end-user with our products.
<br/><br/>At Rehamo, we believe that every individual has to live happily and independently, irrespective of their condition. Hence we have combined the latest technology with a compassionate heart to care for the needy and showcased our products to meet the requirements of every person across conditions. Our product range caters to various conditions right from diabetes to Respironics to orthopedic needs to special needs.
<br/><br/>The products showcased at our showroom include a wide range right from wheelchairs, orthotic devices, walkers, reachers, diabetic shoes, exercise aids, and many more.  We are also pioneers in customizing wheelchairs, diabetic footwear, prosthetics, and orthotics as per the requirement of the user.  Our one-stop solution is not an on the go shop but an experience center. We have an in-house clinical nurse, physiotherapist, prosthetist, and orthotist to cater to all the requirements and give the correct advice and experience of the products to the user.
<br/><br/>We are committed to make the life of every person smooth, confident, and successful and reach great heights without limiting themselves to their limits.
</h6>
                        </Col>
                    </Row></Container>
            </div>
            <Footer />
        </div>
    );
}

export default About;
