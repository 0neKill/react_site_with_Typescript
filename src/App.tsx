import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Header} from "./containers";
import {Cart, Home} from "./pages";


const App: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/cart' component={Cart}/>
                    <Route render={() => <div>404</div>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;