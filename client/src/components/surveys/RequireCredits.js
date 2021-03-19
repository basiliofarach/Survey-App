import React, { Component } from 'react';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import SurveyNew from './SurveyNew';
import { connect } from 'react-redux';


class RequireCredits extends Component{
  render(){

  if(this.props.auth.credits<1) {
    return <Redirect to="/surveys" />
  }


   return(
     <div>
       <Route path='/surveys/new' component={SurveyNew} />
     </div>
   );
  }
}

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(RequireCredits);
