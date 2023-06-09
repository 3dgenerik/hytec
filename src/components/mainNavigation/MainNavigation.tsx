import React, { useEffect, useState } from "react";
import "./navigation.scss";
import { List } from "react-bootstrap-icons";
import { NavMenuIconSM } from "./NavMenuIconSM";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { HNavigation } from "./HNavigation";
import { VNavigation } from "./VNavigation";
import { getScrollY } from "../../features/scrollPosition/scrollPosition.slice";
import { RootState } from "../../app/store";
import { getWindowWidth } from "../../features/windowWidth/windowWidth.slice";
import {motion} from 'framer-motion';
import { useRefresh } from "../hooks/useRefresh";


export const MainNavigation = () => {


  const  {windowWidth, scrollY} = useRefresh()
  const {showHideMainMenu} = useAppSelector((state:RootState) => state.hideShowMainMenu)

  // const {windowWidth} = useAppSelector((state: RootState) => state.width)

  // const {scrollY} =  useAppSelector((state:RootState) => state.scrollPos)
  // const dispatch = useAppDispatch();

  // // const [windowWidth, setWindowWidth] = useState(0);
  // const [windowHeight, setWindowHeight] = useState(0);

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   dispatch(getScrollY(position))
  // };

  // let resizeWindow = () => {
  //   // setWindowWidth(window.innerWidth);
  //   dispatch(getWindowWidth(window.innerWidth))
  //   setWindowHeight(window.innerHeight);
  // };


  // useEffect(() => {
  //   handleScroll();
  //   resizeWindow();
  //   window.addEventListener("resize", resizeWindow);
  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("resize", resizeWindow);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <>
      <motion.nav style={{top:'60px',zIndex: '2' }} className={`position-fixed w-100 nav-mover`}>
        
        <div
          style={{ zIndex: "1" }}
          className="position-fixed d-flex align-items-center mb-3 gap-4 gap-sm-1 menu-translate"
        >
          {
            !showHideMainMenu
            ?
            <NavMenuIconSM bool={false}>
              <List size={32} color="#fff" />
            </NavMenuIconSM>
            :
            <></>
          }
        </div>
        {
          !showHideMainMenu
          ?
          windowWidth > 620
          ?
          <HNavigation windowWidth={windowWidth} />
          :
          <VNavigation windowWidth={windowWidth} />
          :
          <></>
        }

      </motion.nav>
    </>
  );
};
