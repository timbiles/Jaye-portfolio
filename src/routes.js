import React from 'react';
import { Route, Switch} from 'react-router-dom';

import { ROUTE } from './assets/routes';

const routeMap = Object.keys(ROUTE).map((el, i) => {
    return <Route key={i} exact path={el === 'Home' ? '/' : `/${el}`} component={ROUTE[el]}/>
})

export default (
    <Switch>
        {routeMap}
    </Switch>
)