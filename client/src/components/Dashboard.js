import React, { Component } from 'react';
import SurveyList from './surveys/SurveyList';
import Button from '../utils/addButton';
import { connect } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Dashboard extends Component {
    createNotification() {
      return () => {
        switch (this.props.auth.credits) {
          case 0:
            NotificationManager.error('You have no credits', 'Click to close!', 5000);
            console.log(this.props.auth.credits);
            break;
        }
      };
    };

    render() {
      return(
        <div>
          <SurveyList />
          <Button />
             { this.createNotification() }
          <NotificationContainer/>
        </div>
      );
    };
  };

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
