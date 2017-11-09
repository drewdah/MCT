import React from 'react';
import ReactDOM from 'react-dom';

import Viewer from 'viewer/Viewer';

const mainElement = document.getElementById("twitch-extension-viewer");

if(window.Twitch.ext) {

  window.Twitch.ext.onAuthorized(function(auth) {
    console.log('auth', auth);
  });

  window.Twitch.ext.onContext(function(context, contextFields) {
    console.log('context', context);
    console.log('contextFields', contextFields);
  });

  window.Twitch.ext.onError(function(err) {
    console.error('error', err);
  });

}

ReactDOM.render(<Viewer />, mainElement);
