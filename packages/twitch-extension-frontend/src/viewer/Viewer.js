import React from 'react';
import Theater from '../components/theater/index.js';
import Attendee from '../components/attendee/index.js';

const Viewer = () => (
    <div className="viewer-container">
        <h1>MCT</h1>
        <Theater>
            <Attendee name='Drew' />
            <Attendee name='Scott'/>
            <Attendee name='Noah' />
        </Theater>
    </div>
);

export default Viewer;

