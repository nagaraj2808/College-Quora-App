import React from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
            <NavBar />
            <br/>
            <br/>
            <Outlet />
        </>
    )
}
export default Layout;