import {
    DashboardTitle,
    DashboardContainer,
    AmountContainer,
    AmountItem,
    ContentContainer,
    AmountItemTitle
} from "./Dashboard.styles";

// import Popup from "../../components/common/Popup/Popup";

function Dashboard() {
    // const [visibility, setVisibility] = useState(false);
    //
    // const popupCloseHandler = (e) => {
    //     setVisibility(e);
    // };

    return (
        <DashboardContainer>
            <ContentContainer>
                <DashboardTitle>Dashboard</DashboardTitle>
                <AmountContainer>
                    <AmountItem>
                        Available amount
                        <AmountItemTitle>
                            $6,550
                        </AmountItemTitle>
                    </AmountItem>
                    <AmountItem>
                        Card balance
                        <AmountItemTitle>
                            $4,208
                        </AmountItemTitle>
                    </AmountItem>
                    <AmountItem>
                        Credit limit
                        <AmountItemTitle>
                            $20,000
                        </AmountItemTitle>
                    </AmountItem>
                </AmountContainer>
            </ContentContainer>
        </DashboardContainer>
    );
}

export default Dashboard;