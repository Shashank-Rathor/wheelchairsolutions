import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";
import ModalView from "../../components/modal/modal.jsx";
import src from '../../assets/images/logos/FINALLOGO_BOLDED white text-01 (1).png';
import CookieConsent, { Cookies } from "react-cookie-consent";


// sections for this page
import HeaderComponent from "./sections/headercomponent.jsx";
import BannerComponent from "./sections/bannercomponent.jsx";
import FeatureComponent from "./sections/featurecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import source from '../../assets/videos/Flip Wheelchair website video.mp4';
import ChatBot from 'react-simple-chatbot';

const Home = () => {

  const [open,setOpen] = React.useState(false);

  React.useEffect(() => {
    let visited = sessionStorage["alreadyVisited"];
        if(visited) {
             setOpen(false);
             //do not view Popup
        } else {
             //this is the first time
             sessionStorage["alreadyVisited"] = true;
             const timer = setTimeout(() => {
             setOpen(true);
           }, 15000);
           return () => clearTimeout(timer);
           }

  },[])

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                <video className=" vid" autoPlay loop muted style={{width: '100%'}}>
                <source src={source} type='video/mp4' />
                </video>
                {open ? <ModalView/> : null}
                <div className="whatsappFooter">
                <span class="tooltiptext">Need help? Chat with us.</span>
                  <a href="https://wa.me/919742702222" className="link"><i className="fa fa-whatsapp fa-2x" style={{color: 'white'}}></i></a>
                </div>
                    <PortfolioComponent />
                    <BannerComponent />
                    <FeatureComponent />
                    <TestimonialComponent />
                    <CookieConsent
                    location="bottom"
                    buttonText="Accept"
                    cookieName="cookie"
                    cookieValue="string"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "15px" }}
                    expires={150}
                    >
                    This website uses cookies to enhance the user experience.{" "}
                    </CookieConsent>
                     {/* <ChatBot
                     headerTitle="Chat Bot"
                    steps={[
                      {
                        id: '1',
                        message: 'What number I am thinking?',
                        trigger: '2',
                      },
                      {
                        id: '2',
                        options: [
                          { value: 1, label: 'Number 1', trigger: '4' },
                          { value: 2, label: 'Number 2', trigger: '3' },
                          { value: 3, label: 'Number 3', trigger: '3' },
                        ],
                      },
                      {
                        id: '3',
                        message: 'Wrong answer, try again.',
                        trigger: '2',
                      },
                      {
                        id: '4',
                        message: 'Awesome! You are a telepath!',
                        end: true,
                      },
                    ]}
                    floating = 'true'
                    /> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

Home.propTypes = {
    classes: PropTypes.object
};

export default Home;
