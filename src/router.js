import React from 'react';
import { Switch, Route } from 'react-router-dom'; // need route and switch from the router dom. Route is the default component used for defining a new route. Switch is a component for determining which route to display.

//need the views:

import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';
import Shop from './components/Shop/Shop';
import ThankYou from './components/ThankYou/ThankYou';


//creating the router...need to export JSX. Top level element is Switch component from the router dom
export default (
  <Switch>
    <Route component={ Landing } exact path = "/" />
    <Route component={ Shop } path="/shop" />
    <Route component={ Details } path="/details/:name" />
    <Route component={ Cart } path="/cart" />
    <Route component={ ThankYou } path="/thank-you" />
  </Switch>
)

//the routes translate to:
// Say the server is hosted locally on port 3000.
// A user goes to http://localhost:3000/ in their browser -> The Landing component will render.
// A user goes to http://localhost:3000/shop in their browser -> The Shop component will render.
// A user goes to http://localhost:3000/details/someNameGoesHere in their browser -> The Details component will render.
// A user goes to http://localhost:3000/cart in their browser -> The Cart component will render.
