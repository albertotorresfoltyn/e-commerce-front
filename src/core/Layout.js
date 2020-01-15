import React from 'react';
import Menu from './Menu'
import BannerTop from './BannerTop'
import FooterSection from './FooterSection'
import '../styles.css'

const Layout = ({title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
        <BannerTop title={title} description={description}/>
        <div className={className}>{children}</div>
      <FooterSection></FooterSection>
    </div>
);

export default Layout;