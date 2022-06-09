import {
    DashboardTitle,
    DashboardContainer,
    ContentContainerLeft, ContentContainerRight,
} from "./Dashboard.styles";
import Chart from "./components/Chart/Chart";
import Amount from "./components/AmountCard/Amount";
import SavingsStyles from "./components/Savings/Savings";

function Dashboard() {


    return (
        <DashboardContainer>
            <ContentContainerLeft>
                <DashboardTitle>Dashboard</DashboardTitle>
                <Amount />
                <SavingsStyles />
            </ContentContainerLeft>
            <ContentContainerRight>
                <Chart />
            </ContentContainerRight>
        </DashboardContainer>
    );
}

export default Dashboard;