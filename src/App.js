import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from "./Component/Navibar";
import Footer from "./Component/Footer";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {AboutUs} from './Pages/AboutUs';
import {Pay} from './Pages/Pay';
import {Delivery} from './Pages/Delivery';
import {RewiewsContainer} from './Pages/Rewiew/RewiewsContainer';
import {RecipesContainer} from './Pages/Recipes/RecipesContainer';
import {Contacts} from './Pages/Contacts';

function App( props ) {
 
  return (
    <>
    <Router>
    <Navibar/>
    <Switch>
       <Route exact path="/Pages/aboutUs" component={AboutUs}/>
       <Route exact path="/Pages/pay" component={Pay}/>
       <Route exact path="/Pages/delivery" component={Delivery}/>
       <Route path="/Pages/reviews" 
          render={()=><RewiewsContainer store= {props.store}/>}/>
       <Route path="/Pages/recipes" 
          render= { () => <RecipesContainer catalog={props.store}/>}/>
       <Route exact path="/Pages/contacts" component={Contacts}/>
    </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
