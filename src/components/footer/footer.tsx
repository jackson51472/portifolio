'use server'
import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
    );
};

export default Footer;