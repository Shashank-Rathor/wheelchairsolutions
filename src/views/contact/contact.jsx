import React from "react";
import PropTypes from "prop-types";



// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import ContactComponent from "../../views/home/sections/contactcomponent";
import contactUs from '../../assets/images/landingpage/ContactUs.png';
import BannerComponent from './sections/bannercomponent';
import FeatureComponent from "./sections/featurecomponent.jsx";


const Contact = (props) => {

  const[prod,setProd]=React.useState("");

    React.useEffect(() => {
      setProd(props.location.prod)
    },[])

    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                <img src={contactUs} width="100%" height="90%"/>
                <div className="whatsappFooter">
                <span class="tooltiptext">Need help? Chat with us.</span>
                  <a href="https://api.whatsapp.com/send?phone=+91 9108740369" className="link"><i className="fa fa-whatsapp fa-2x" style={{color: 'white'}}></i></a>
                </div>
                <FeatureComponent activekey={props.location.data}/>
                <ContactComponent prod={prod}/>
                <BannerComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
}

Contact.propTypes = {
    classes: PropTypes.object
};

export default Contact;
