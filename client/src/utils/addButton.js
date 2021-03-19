import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


class Button extends Component {

  render() {
    return (
      <div>
        <div  className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>

      </div>
    );
  }
}


export default connect(null)(Button);
