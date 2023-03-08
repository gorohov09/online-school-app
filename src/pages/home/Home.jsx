import React from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import WidgetInfo from '../../components/widgetInfo/WidgetInfo';

import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <WidgetInfo type="students"/>
                    <WidgetInfo type="courses"/>
                </div>
            </div>
        </div>
    )
}

export default Home;