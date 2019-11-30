import React from 'react';
import Menu from './Menu'
import BannerTop from './BannerTop'
import '../styles.css'

const Layout = ({ title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
        <BannerTop />
        <div className={className}>{children}</div>
    </div>

);

export default Layout;