import React from 'react';
import ChatMembers from './ChatMembers';
import Message from './Message';

const Chat = () => {
    return (
        <div className='flex p-16'>
            <div style={{width:"435px"}} className='w-6/12 bg-base-100 border rounded'>
            <ChatMembers></ChatMembers>
            </div>
            <div style={{width:"637px"}} className='border bg-base-100'>
            <Message></Message>
            </div>
        </div>
    );
};

export default Chat;