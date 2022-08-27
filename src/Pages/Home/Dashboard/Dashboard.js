
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import dashboardIco from '../../../assets/icon/dashb.png'
import property from '../../../assets/icon/chart-square.png'
import lead from '../../../assets/icon/personalcard.png'
import chat from '../../../assets/icon/message_1_fill.png'
import sales from '../../../assets/icon/Vector.png'
import calender from '../../../assets/icon/calendar.png'
import profile from '../../../assets/icon/frame.png'
import setting from '../../../assets/icon/setting-2.png'

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            {/* <h2 style={{fontFamily:"poppins", letterSpacing:"3px"}} className='text-2xl font-semibold text-blue-600 p-5'>Dashboard</h2> */}
            <Outlet></Outlet>
        </div>
        <div style={{fontFamily:"poppins"}} class="drawer-side border border-t-0">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-100 border-l-2 p-4 overflow-y-auto w-60 gap-5">
                
                <li><Link to="/" className='btn btn-info flex justify-start border-none normal-case bg-base-100 text-black'>
                    <img style={{width:"26.33px", height:"28.43px"}} src={dashboardIco} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Dashboard</p>
                    </Link></li>
                <li><Link to="/dashboard" className='btn btn-info flex justify-start border-none normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={property} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Property</p>
                    
                    </Link></li>
                <li><Link to="/" className='btn btn-info flex justify-start border-none normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={lead} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Lead</p>
                    </Link></li>
                <li><Link to="/dashboard/chat" className='btn btn-info flex justify-start border-none normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={chat} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Chat</p>
                    </Link></li>
                <li><Link to="/" className='btn btn-info border-none flex justify-start normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={sales} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Sales Partner</p>
                    </Link></li>
                <li><Link to="/" className='btn btn-info border-none flex justify-start normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={calender} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Calender</p>
                    
                    </Link></li>

                <hr />

                <li><Link to="/" className='btn btn-info flex justify-start border-none normal-case bg-base-100 text-black'>
                <img style={{width:"26.33px", height:"28.43px"}} src={profile} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Profile</p>
                    </Link></li>
                    <li><Link to="/" className='btn btn-info flex justify-start border-none bg-base-100 text-black normal-case'>
                    <img style={{width:"26.33px", height:"28.43px"}} src={setting} alt="" />
                    <p style={{fontSize:"18.97px"}} className="font-medium">Setting</p></Link></li>

                <li>
                    <Link to='/'><button className='btn w-6/12 mx-auto normal-case font-medium bg-red-600 text-white'>log out</button></Link>
                </li>

            </ul>

        </div>
    </div>
    );
};

export default Dashboard;