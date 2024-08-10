import React from 'react';
import SideNavigation from '@/components/SideNavigation';
import TopNavigation from '@/components/TopNavigation';
import { Outlet } from 'react-router-dom';
import backgroundImage from '../assets/images/Fourways.jpg';

const Home = () => {
  return (
    <div
      className="w-full h-full flex flex-col"

    >
      <TopNavigation />
      <div className="flex w-full h-full justify-between">
        <div className="w-1/5">
          <SideNavigation />
        </div>
        <div className="
        outlet
        w-3/4
        p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
