import React from "react";
import PropTypes from "prop-types";



// core components
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import ModalView from "../../components/modal/modal.jsx";

// sections for this page
import BannerComponent from './sections/bannercomponent';
import FeatureComponent from "./sections/featurecomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import PricingComponent from "./sections/pricingcomponent.jsx";
import Customs from "./sections/customs.jsx";
import instance from '../../components/firebase/instance';

import { Carousel } from 'react-bootstrap';


const Products = (props) => {

  const titleRef = React.useRef();

  const [cat,setCat] = React.useState("");
  const [load,setLoad] = React.useState(false);
  const [loadCust,setLoadCust] = React.useState(false);
  const [title,setTitle] = React.useState("");
  const [open,setOpen] = React.useState(false);


  const getCat = (cat) => {
    instance.get(`/Categories/${cat}.json`)
  }

  const activeHandler = (e) => {
    console.log(e.target.innerText);
    setCat("Active");
    if(e.target.innerText === "tandard") {
      setLoad(true);
      setLoadCust(false);
      setTitle("Standard Active WheelChair");
     }
    if(e.target.innerText === "ustomized"){
      setLoadCust(true);
      setLoad(false);
      setTitle("Customized Active WheelChair");
    }
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const semiactiveHandler = (e) => {
      setCat("SemiActive");
      if(e.target.innerText === "tandard") {
        setLoad(true);
        setLoadCust(false);
        setTitle("Standard Semi Active WheelChair");
       }
      if(e.target.innerText === "ustomized"){
        setLoadCust(true);
        setLoad(false);
        setTitle("Customized Semi Active WheelChair");
      }
       titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const transitHandler = (e) => {
    setCat("Transit");
    if(e.target.innerText === "tandard") {
      setLoad(true);
      setLoadCust(false);
      setTitle("Standard Transit WheelChair");
     }
    if(e.target.innerText === "ustomized"){
      setLoadCust(true);
      setLoad(false);
      setTitle("Customized Transit WheelChair");
    }
    titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const sportsHandler = (e) => {
      setCat("Sports");
      if(e.target.innerText === "tandard") {
        setLoad(true);
        setLoadCust(false);
        setTitle("Standard Sports WheelChair");
       }
      if(e.target.innerText === "ustomized"){
        setLoadCust(true);
        setLoad(false);
        setTitle("Customized Sports WheelChair");
      }
       titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const paediatricHandler = (e) => {
      setCat("Paediatric");
      if(e.target.innerText === "tandard") {
        setLoad(true);
        setLoadCust(false);
        setTitle("Standard Paediatric WheelChair");
       }
      if(e.target.innerText === "ustomized"){
        setLoadCust(true);
        setLoad(false);
        setTitle("Customized Paediatric WheelChair");
      }
       titleRef.current.scrollIntoView({ behavior: 'smooth'})
  }
  const powerHandler = (e) => {
      setCat("Power");
      if(e.target.innerText === "tandard") {
        setLoad(true);
        setLoadCust(false);
        setTitle("Standard Power WheelChair");
       }
      if(e.target.innerText === "ustomized"){
        setLoadCust(true);
        setLoad(false);
        setTitle("Customized Power WheelChair");
      }
      titleRef.current.scrollIntoView({ behavior: 'smooth' })
  }

    return (
        <div id="main-wrapper">
                <div className="container-fluid">
                <div className="whatsappFooter">
                <span class="tooltiptext">Need help? Chat with us.</span>
                  <a href="https://api.whatsapp.com/send?phone=+91 9108740369" className="link"><i className="fa fa-whatsapp fa-2x" style={{color: 'white'}}></i></a>
                </div>
                <FeatureComponent/>
                <TeamComponent
                activeHandler={activeHandler}
                semiactiveHandler={semiactiveHandler}
                transitHandler={transitHandler}
                sportsHandler={sportsHandler}
                powerHandler={powerHandler}
                paediatricHandler={paediatricHandler}/>
                <div ref={titleRef}></div>
                {load ? <PricingComponent  title={title}
                cat={cat}
                /> : null}
                {loadCust ? <Customs  title={title}
                cat={cat}
                /> : null}
                <BannerComponent />
                </div>
            <Footer />
        </div>
    );
}

Products.propTypes = {
    classes: PropTypes.object
};

export default Products;
