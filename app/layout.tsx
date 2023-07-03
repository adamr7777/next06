import './globals.css';

import Navbar from './components/Navbar';
import Posts from './components/Posts';
import ProfilePic from './components/ProfilePic';


export const metadata = {
  title: 'Blog',
  
}

function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className='bg-slate-800 text-white'>
                <Navbar/>
                <ProfilePic/>
                {children}
                <Posts/>
            </body>
        </html>
    );
};

export default RootLayout;
