/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import HeaderBanner from '../../components/banner2/banner2';
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Privacy = () => {

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
                        <h2 className="title"><strong>Privacy Policy</strong></h2>
                            <h6 className="subtitle">At Wheelchair Solutions, accessible from www.wheelchair.solutions, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Wheelchair Solutions and how we use it.
                            <br/><br/>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                            <br/><br/>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Wheelchair Solutions. This policy is not applicable to any information collected offline or via channels other than this website.
                        </h6>
                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Consent</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Information we collect</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                          <br/><br/>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                          <br/><br/>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                        </h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>How we use your information</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">We use the information we collect in various ways, including to:
                            <ul>
                              <li>Provide, operate, and maintain our website</li>
                              <li>Improve, personalize, and expand our website</li>
                              <li>Understand and analyse how you use our website</li>
                              <li>Develop new products, services, features, and functionality</li>
                              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                              <li>Send you emails</li>
                              <li>Find and prevent fraud</li>
                            </ul>
                          </h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Log Files</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">Wheelchair Solutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analysing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                            <h4 className="title"><strong>Cookies and Web Beacons</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">Like any other website, Wheelchair Solutions uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Google DoubleClick DART Cookie</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL https://policies.google.com/technologies/ads</h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Third Party Privacy Policies</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">Wheelchair Solutions's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                          <br/><br/>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                          </h6>
                          </AccordionDetails>
                          
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>GDPR Data Protection Rights</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                          <ul>
                          <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                          <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                          <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                          <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                          </ul>
                          If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                          </h6>
                          </AccordionDetails>
                          </Accordion>

                          <Accordion>
                          <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          >
                          <h4 className="title"><strong>Children's Information</strong></h4>
                          </AccordionSummary>
                          <AccordionDetails>
                          <h6 className="subtitle">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                          <br/><br/>Wheelchair Solutions does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </h6>
                          </AccordionDetails>
                          </Accordion>
                        </Col>
                    </Row></Container>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;
