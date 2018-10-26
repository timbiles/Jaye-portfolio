import React from 'react';
import { Route, Switch} from 'react-router-dom';

import About from './Components/bio/bio';
import Admin from './Components/admin/admin';
import Contact from './Components/contact/contact';
import Events from './Components/events/events';
import Home from './Components/home/home';
import Music from './Components/music/music';

export default (
    <Switch>
        <Route path='/about' component={About} />
        <Route path='/admin' component={Admin} />                                                  
        <Route path='/contact' component={Contact} />  
        <Route path='/events' component={Events} />  
        <Route path='/music' component={Music} />          
        <Route exact path='/' component={Home} />
    </Switch>
)