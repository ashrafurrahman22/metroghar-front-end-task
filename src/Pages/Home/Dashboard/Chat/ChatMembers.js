import React from 'react';

const ChatMembers = () => {
    return (
        <div className='p-5'>
            <div className='flex flex-col justify-center items-center'>
            <h2 style={{fontFamily:"poppins"}} className='text-3xl pt-2 pb-8 font-semibold'>Chat</h2>
            <div className='pb-8 w-full'>
            <input type="text" placeholder="Search" class="input input-bordered border-b-2 border-x-0 border-t-0  w-full bg-base-100" />
            </div>


            <div className="grid gap-4">
                {/* members */}
            <div className='flex items-center gap-5 border-b-2'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
            </label>
             <div>
            <h2 className='text-xl font-semibold'>Elegance Homes</h2>
            <p className='text-slate-400'>Sure, we will let you know about this  </p>
            </div>
            </div>
            {/* members */}
            <div className='flex items-center gap-5 border-b-2'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
            </label>
             <div>
            <h2 className='text-xl font-semibold'>Metro Ghar</h2>
            <p className='text-slate-400'>Sure</p>
            </div>
            </div>
            {/* members */}
            <div className='flex items-center gap-5 border-b-2'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
            </label>
             <div>
            <h2 className='text-xl font-semibold'>Nadan Kumar</h2>
            <p className='text-slate-400'>Okay, we will inform you about this</p>
            </div>
            </div>
            {/* members */}
            <div className='flex items-center gap-5 border-b-2'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
            </label>
             <div>
            <h2 className='text-xl font-semibold'>Manju Nath</h2>
            <p className='text-slate-400'>Ok, Done!</p>
            </div>
            </div>
            {/* members */}
            <div className='flex items-center gap-5'>
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt='' />
            </div>
            </label>
             <div>
            <h2 className='text-xl font-semibold'>Metro Ghar</h2>
            <p className='text-slate-400'>Sure, Whenever client confirm the data I’ll call you</p>
            </div>
            </div>
            </div>

            </div>
        </div>
    );
};

export default ChatMembers;