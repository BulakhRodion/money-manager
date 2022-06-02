import {
    DashboardTitle,
    DashboardContainer,
    ContentContainerLeft, ContentContainerRight,
} from "./Dashboard.styles";
import Chart from "./components/Chart/Chart";
import Amount from "./components/AmountCard/Amount";

function Dashboard() {


    return (
        <DashboardContainer>
            <ContentContainerLeft>
                <DashboardTitle>Dashboard</DashboardTitle>
                <Amount />
            </ContentContainerLeft>
            <ContentContainerRight>
                <Chart />
            </ContentContainerRight>
        </DashboardContainer>
    );
}

export default Dashboard;