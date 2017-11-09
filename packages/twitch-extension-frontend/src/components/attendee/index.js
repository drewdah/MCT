import React from 'react';

import './attendee.scss';

class Attendee extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="attendee">
            <span className="attendee-name">{this.props.name}</span>
        </div>
      );
    }
  }

export default Attendee;