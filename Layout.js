import React from "react";
import HeaderF from "./HeaderF";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <div>
            <HeaderF />
            <section>
            <Outlet />
            </section>

        </div>
    );
}