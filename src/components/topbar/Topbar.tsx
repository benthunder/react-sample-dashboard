import React from 'react';
import './topbar.css';
import { NotificationsNone, Settings, Person } from '@mui/icons-material';


function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWraper">
                <div className='topLeft'>
                    <span className="logo">
                        Thunder Admin
                    </span>
                </div>
                <div className='topRight'>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <img src="https://images.pexels.com/photos/11625055/pexels-photo-11625055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className='topAvatar' />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Topbar;
