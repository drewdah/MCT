import React from 'react';
import ReactDOM from 'react-dom';
import ChatClient from '../utilities/tmi-chat';
import Viewer from 'viewer/Viewer';

const mainElement = document.getElementById("twitch-extension-viewer");

if(window.Twitch.ext) {

  window.Twitch.ext.onAuthorized(function(auth) {
    ChatClient.connect();
    
    ChatClient.on("chat", function (channel, userstate, message, self) {
      console.log(channel, userstate, message, self);
    });
  });

  window.Twitch.ext.onContext(function(context, contextFields) {
    //console.log('context', context);
    //console.log('contextFields', contextFields);
  });

  window.Twitch.ext.onError(function(err) {
    console.error('error', err);
  });

}

ReactDOM.render(<Viewer />, mainElement);
