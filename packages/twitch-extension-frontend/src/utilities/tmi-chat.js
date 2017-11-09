var options = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true,
        secure: true
    },
    channels: ["#DigiSaint"]
};

const ChatClient = new tmi.client(options);

export default ChatClient;