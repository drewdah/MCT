import React from 'react';

class Theater extends React.Component {
    render() {
      return (
        <div className="theater">
            <h1>Theater</h1>
            { this.props.children }
        </div>
      )
    }
  }

  export default Theater;