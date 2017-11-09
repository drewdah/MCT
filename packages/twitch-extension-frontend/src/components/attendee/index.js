import React from 'react';

class Attendee extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="attendee">
            <h1>{this.props.name}</h1>
        </div>
      );
    }
  }

export default Attendee;