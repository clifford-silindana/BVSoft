import React, { useRef, useEffect, useState }from 'react';
import { Link, useNavigate } from 'react-router-dom';

//component import
// import NavigationItem from "../components/NavigationItem";

//image import
// import levitatelogo from "../assets/images/levitate-logo-2.png";
// import profilepicture from "../assets/images/profile-picture.jpg";

//icon import
// import hamburgermenu from "../assets/icons/hamburgermenu.png";
// import allticketsicon from "../assets/icons/document.png";
// import newticketicon from "../assets/icons/add.png";
// import logouticon from "../assets/icons/turn-off.png";
// import closeicon from "../assets/icons/close.png";

const TopNavigation = () => {
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (navRef.current) {
        setNavHeight(navRef.current.clientHeight);
        }
    }, []);

    // console.log(navHeight);

    const [active, setActive] = useState(""); 

    // const navToggle = () => {
    //   active === "nav__menu" 
    //   ? 
    //   setActive("nav__menu nav__active") 
    //   : 
    //   setActive("nav__menu");
    //   //alert("Menu clicked");
    //   console.log(active);
  
    // }

    const displayMenu = () => {
      setTimeout(() => {
        setActive('nav__menu'); // Start showing transition after 0.5s
      }, 500);
    };

    const hideMenu = (path) => {
      navigate(path);
  
      setTimeout(() => {
        setActive('nav__menu nav__active'); // Start hiding transition
      }, 1500); // 3s duration + 0.5s delay
    }

  return (
    <div
    ref={navRef} 
    className = {`
        top-navigation
    bg-bodyBackgroundColor
    w-navigationWidth 
    mobile:h-mobileNavigationHeight
    mobile:px-mobileNavigationXPadding
    tablet:h-tabletNavigationHeight
    tablet:px-tabletNavigationXPadding
    desktop:h-tabletNavigationHeight 
    desktop:px-desktopNavigationXPadding
    wideScreen:h-tabletNavigationHeight 
    wideScreen:px-wideScreenNavigationXPadding
    fixed top-0 left-0
    padding-10 
    flex justify-between items-center
    z-10`}>
      <Link to = {``}>
        {/* <img className = {`mobile:w-mobileLogoSize
        tablet:w-tabletLogoSize
        desktop:w-desktopLogoSize
        wideScreen:w-wideScreenLogoSize`} 
        src={levitatelogo}  alt="" /> */}
        <h1>Logo here</h1>
        </Link>

        {/* <h1 className = "text-white">Navigation height is {navHeight}</h1> */}

        <div className = "flex justify-between items-center">
        <div id = {active} className={`${active ? 'nav__menu nav__active' : 'nav__menu'} flex justify-between mr-10 mobile:hidden bg-bodyBackgroundColor`}>
          {/* <img className = {`w-5 h-5 wideScreen:hidden desktop:hidden tablet:hidden`}src= {closeicon} alt="" /> */}
        {/* <NavigationItem to = "" navigationText = "All tickets" icon = {allticketsicon}/>
        <NavigationItem to = "new-ticket" navigationText = "New ticket" icon = {newticketicon} />
        <NavigationItem to = "/" navigationText = "Logout" icon = {logouticon} /> */}
          {/* <NavigationItem to="" navigationText="All tickets" icon={allticketsicon} onClick={() => hideMenu('')} />
          <NavigationItem to="new-ticket" navigationText="New ticket" icon={newticketicon} onClick={() => hideMenu('new-ticket')} />
          <NavigationItem to="/" navigationText="Logout" icon={logouticon} onClick={() => hideMenu('/')} /> */}
          <h1>Navigaiton item </h1>
          <h1>Navigaiton item </h1>
          <h1>Navigaiton item </h1>

        </div>

        <Link to = {`/profile`}>

        <div className = "w-24 mobile:w-20 h-24 mobile:h-20 rounded-full overflow-hidden bg-gray-800 text-white  flex items-center justify-center mr-10">
            {/* <img src= {profilepicture} className = "w-full h-full object-cover rounded-full" alt="" /> */}
            <h1>Profile picture here</h1>
        </div>

        </Link>
        {/* <img className = {`
        ${active ? 'nav__menu nav__active' : 'nav__menu'}
        nav__toggler
        w-hamburgerMenuWidth
        tablet:hidden
        desktop:hidden
        wideScreen:hidden`} 
        src= {hamburgermenu} 
        alt=""
        onClick = {displayMenu} /> */}
        <h1>Image here</h1>
        </div>

        

    </div>
    
  )
}

export default TopNavigation