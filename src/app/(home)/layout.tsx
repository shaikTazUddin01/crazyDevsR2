import Footer from '@/src/components/Ui/Shared/Footer';
import Navbar from '@/src/components/Ui/Shared/Navbar';
import React, { ReactNode } from 'react';

const layout = ({children}:{children:ReactNode}) => {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;