import React from 'react';
import Theater from '../components/theater/index.js';
import Attendee from '../components/attendee/index.js';

import './viewer.scss';

class Viewer extends React.Component {

    componentDidMount() {
        console.log();
    }

    render() {
        return (
            <div className="viewer-container">
                <h1>Mystery Chat Theater</h1>
                <Theater>
                    <Attendee name='Dude1' />
                    <Attendee name='Dude2'/>
                    <Attendee name='Dude3' />
                </Theater>
            </div>
        )
    }
    
};

export default Viewer;

