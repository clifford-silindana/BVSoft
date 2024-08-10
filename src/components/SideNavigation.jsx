import React from 'react';
import NavigationItem from './NavigationItem';

//icons import
import dashboard from "../assets/icons/dashboard.png";
import access from "../assets/icons/access.png";
import maintenance from "../assets/icons/maintenance.png";
import home from "../assets/icons/home.png";

const SideNavigation = () => {
  return (
    <div className = {`
      side-navigation
      w-full
      h-auto
      py-5
      `}>
        <NavigationItem to = "" icon = {dashboard} navigationText = "Dashboard"/>
        <NavigationItem to = "access-control/" icon = {access} navigationText = "Access Control"/>
        <NavigationItem to = "maintanance/" icon = {maintenance} navigationText = "Maintenance"/>
        <NavigationItem to = "my-unit/" icon = {home} navigationText = "My Unit"/>
  
      </div>
  )
}

export default SideNavigation;