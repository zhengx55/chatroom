import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeeds from './components/ChatFeeds';
import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="8b541825-0f6b-44b3-9a8f-193168f00477"
            userName="zhengx55"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeeds {...chatAppProps} />}
        />
    )
};
export default App;