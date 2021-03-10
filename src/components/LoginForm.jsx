import axios from 'axios';
import { useState } from 'react';

const LoginForm = () => {
    const [userName, setUsername] = useState('');
    const [passWord, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        // ask the chat engine to require a message
        const authObject = { 'Project-ID': "8b541825-0f6b-44b3-9a8f-193168f00477", 'User-Name': userName, 'User-Secret': passWord };
        
        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });
            localStorage.setItem('username', userName);
            localStorage.setItem('password', passWord);
            window.location.reload();
        } catch (error) {
            setError('Incorrect credentials.');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Welcome to the Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
                    <input type="text" value={passWord} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{ error }</h2>
                </form>
            </div>
        </div>
    )
}
export default LoginForm;