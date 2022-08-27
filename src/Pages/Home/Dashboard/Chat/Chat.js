import React from 'react';
import ChatMembers from './ChatMembers';
import Message from './Message';

const Chat = () => {
    return (
        <div className='flex px-8'>
            <div style={{width:"435px"}} className='w-6/12 border rounded'>
            <ChatMembers></ChatMembers>
            </div>
            <div style={{width:"637px"}} className='border'>
            <Message></Message>
            </div>
        </div>
    );
};

export default Chat;