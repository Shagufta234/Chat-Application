import React, { useState } from 'react'

const ChatApp = () => {
    const [message, setMessage] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleMessageSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() !== '') {
            setMessage([...message, inputValue.trim()]);
            setInputValue('');
        }
    };
  return (
    <div className='chat-app'>
        <div className='chat'>
            <div className='chat-message'>
                {message.map((message, index) =>(
                    <div key={index} className='chat-message'>{message}</div>
                ))}
            </div>
            <form className="chat-input" onSubmit={handleMessageSubmit}>
                <input type="text" value= {inputValue} onChange={(event) => setInputValue(event.target.value)}
                placeholder='Type your message...'/> 
                <button type='submit'>Send</button>

            </form>
        </div>
    </div>

  )
}

export default ChatApp;