import React from 'react';
import { Link } from 'react-router-dom';


const NavigationItem = (props) => {
  return (
    <Link to = {props.to}
    onClick={props.onClick}
    className = {`group 
    px-mobileNavigationItemHorizontalPadding 
    py-mobileNavigationItemVerticalPadding 
    mx-mobileNavigationItemHorizontalMargin
    my-mobileNavigationItemVerticalMargin 
    borderColor border-borderWidth border-solid 
    hover:border-borderColorHover 
    text-navigationItemFontColor 
    text-mobileNavigationMinFontSize

    hover:bg-navigationItemBackgroundHoverColor 
    hover:text-navigationItemFontHover
    tablet:flex desktop:flex wideScreen:flex 
    items-center justify-start
    mobile:w-3/4
    transition duration-300 ease-in-out delay-300
   `}>
           <div className="group-hover:bg-navigationItemBackgroundHoverColor group-hover:scale-105 transition duration-300 ease-in-out delay-300 w-full flex items-center justify-evenly mobile:w-3/4">
           <h1 className="font-navigationFontFamily font-navigationFontWeight text-navigationItemFontColor group-hover:text-navigationItemFontHover group-hover:scale-105 mx-2 transition duration-300 ease-in-out delay-300">{props.navigationText}</h1>
                <img src={props.icon} alt="" className="w-mobileNavigationIconWidth group-hover:bg-navigationItemBackgroundHoverColor group-hover:scale-105 transition duration-300 ease-in-out delay-300" />
            </div>
    </Link>
        
  )
}

export default NavigationItem;