/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';

import instance from '../../../components/firebase/instance';

import img1 from '../../../assets/images/portfolio/img1.webp';

const PricingComponent = (props) => {

  const [prods,setProds] = React.useState([]);
  const [loading,setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    instance.get(`/Categories/${props.cat}.json`).then((response) => {
      const fetchedResults = [];

        for (let key in response.data) {
          fetchedResults.push({
            ...response.data[key],
            id: key,
          });
        }

        setLoading(false);
        setProds(fetchedResults);
    })
  },[props])

    return (
        <div>
            <div className="spacer bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">{props.title}</h1>
                            <h6 className="subtitle">Here you can check Demos we created based on WrapKit. Its quite easy to Create your own dream website &amp; dashboard in No-time.</h6>
                            {loading ? <CircularProgress size = '80' /> : null}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="pricing8 spacer b-t">
                <Container>
                    <Row className="m-t-40">
                    {prods.map((item) =>
                      <Col md="4" className=" pricing-box align-self-center">
                          <Card className="b-all">
                              <CardBody className="p-10 text-left">
                              <img className="card-img-top" src={item.Url} alt="customization" />
                                  <h5>{item.Name}</h5>
                                  <p className="m-t-1" style={{textAlign: 'justify'}}>{item.Description}</p>
                              </CardBody>
                              <Link   to={{
                                pathname: '/contact',
                                prod: item.Name
                              }} className="btn btn-inverse p-15 btn-arrow btn-block">Enquire now</Link>
                              <a href='https://www.rehamo.com/shop/Wheelchairs/All' className="btn btn-info-gradiant btn-md btn-arrow m-t-20"><span>Shop Now<i className="ti-arrow-right"></i></span></a>
                          </Card>
                      </Col>
                    )}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PricingComponent;
