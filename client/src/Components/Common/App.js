import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HeaderNewsCategory from './HeaderNewsCategory';
import CategoryPage from './CategoryPage';
import ManageAPI from './ManageAPI';

const App =()=>{

    return(
    
    <div className="ui container">
      <BrowserRouter>
        <div>
          
          <HeaderNewsCategory/>
          <Switch>
            <Redirect exact from='/' to='/category/general'/>
            <Route exact path="/category/livenews"  component={ManageAPI} />
            <Route exact path="/category/:categoryname"  component={CategoryPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
 
    );
};


export default App;
