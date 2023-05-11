import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

type MainLayoutProps = {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps ) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />

    </>
  )
}

export default MainLayout