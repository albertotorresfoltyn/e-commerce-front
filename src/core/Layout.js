import React from 'react';
import Menu from './Menu'

import FooterSection from './FooterSection'
import '../styles.css'

const Layout = ({title = "Title", description = "Description", className, children }) => (
    <div>
        <Menu />
        <div className={className}>{children}</div>
      <FooterSection></FooterSection>
    </div>
);

export default Layout;