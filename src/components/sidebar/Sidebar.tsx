import React from 'react';
import './sidebar.css';

import { Pages, TrendingUp } from '@mui/icons-material';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWraper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className='sidebarItem active'>
                            <Pages className='sidebarIcon' />Bài Viết
                        </li>
                        <li className='sidebarItem'>
                            <TrendingUp className='sidebarIcon' />Phân Tích
                        </li>
                    </ul>

                    <div className="sidebarTitle">Dashboard</div>
                    <ul className="sidebarList">
                        <li className='sidebarItem'>
                            <Pages className='sidebarIcon' />Bài Viết
                        </li>
                        <li className='sidebarItem'>
                            <TrendingUp className='sidebarIcon' />Phân Tích
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;