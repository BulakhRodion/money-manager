import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {DashboardContainer} from "./Dashboard.styles";

function Dashboard(props) {
    return (
        <DashboardContainer>
            <Navbar/>
        </DashboardContainer>
    );
}

export default Dashboard;