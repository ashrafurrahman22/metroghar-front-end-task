import { faCalendar, faChartBar, faChartColumn, faCoffee, faGear, faGears, faMessage, faTableList, faUser, faUserCircle, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <h2 style={{fontFamily:"inter"}} className='text-5xl text-left ml-3 my-3 font-bold text-purple-500'>Dashboard</h2>
            <Outlet></Outlet>
        </div>
        <div class="drawer-side border border-t-0">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-100 border-l-2 p-4 overflow-y-auto w-60 gap-5 text-white text-base-content">
                
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faTableList} />
                    Dashboard</Link></li>
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faChartColumn} />
                    Property</Link></li>
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faUsers} />
                    Lead</Link></li>
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faMessage} />
                    Chat</Link></li>
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faUserCircle} />
                    <p>Sales-Partner</p>
                    </Link></li>
                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faCalendar} />
                    Calender</Link></li>

                <hr />

                <li><Link to="/" className='btn btn-info border-none normal-case bg-base-200 text-black'>
                <FontAwesomeIcon icon={faUser} />
                    Profile</Link></li>
                    <li><Link to="/" className='btn btn-info border-none bg-base-200 text-black normal-case'>
                <FontAwesomeIcon icon={faGear} />
                    Setting</Link></li>

                <li>
                    <Link to='/'><button className='btn w-full normal-case bg-red-600 text-white'>Logout</button></Link>
                </li>

            </ul>

        </div>
    </div>
    );
};

export default Dashboard;