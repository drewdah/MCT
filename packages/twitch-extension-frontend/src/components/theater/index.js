import React from 'react';

import './theater.scss';

class Theater extends React.Component {
    render() {
      return (
        <div className="theater">
            { this.props.children }
        </div>
      )
    }
  }

export default Theater;