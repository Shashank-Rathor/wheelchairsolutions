import React from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import './assets/scss/style.scss';
import ScrollToTop from './ScrollToTop';
import ReactGa from 'react-ga';

import createHistory from 'history/createBrowserHistory'
// pages for this product
import Contact from "./views/contact/contact.jsx";
import Home from "./views/home/home.jsx";
import Products from "./views/products/products.jsx";
import About from "./views/about/about.jsx";
import Privacy from "./views/privacy/privacy.jsx";

const history = createHistory()
history.listen(location => {
    ReactGa.set({ page: location.pathname })
    ReactGa.pageview(location.pathname)
})

function App() {

  React.useEffect(() => {

    ReactGa.pageview(window.location.pathname)
  },[])

  return (
    <BrowserRouter history={history}>
    <ScrollToTop>
        <Switch>
            <Route path="/contact" component={ Contact} />
            <Route path="/products" component={ Products} />
            <Route path="/privacy" component={ Privacy} />
            <Route path="/about" component={ About} />
            <Route path="/" component={Home} />
        </Switch>
        </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
