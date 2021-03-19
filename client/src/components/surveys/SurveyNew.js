// Survey New shows SurveyFORM and SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />);
    }


    return (
      <SurveyForm
        onSurveySumbit={() => this.setState({ showFormReview: true })}
      />);
  }

  render() {
      return(
        <div>
          {this.renderContent()}
        </div>
      );
  }
}

//Currently making a function so it cannot go to new page
function requireCredits({ auth }){
  const errors = {};

  if (this.props.auth.credits<1) {
    errors[this.props.auth.credits] = "You don't have credits";
  }

  return errors;
}

function mapStateToProps({ auth }){
  return { auth };
}

export default reduxForm({
  mapStateToProps,
  requireCredits,
  form: 'surveyForm'
})(SurveyNew);
