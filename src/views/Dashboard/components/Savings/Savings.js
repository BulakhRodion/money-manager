import React from 'react';
import {SavingsContainer, SavingsItem, SavingsGoal, SavingsAmount, SavingsIcon} from "./Savings.styles";
import IconTrip from "@assets/icons/goal.png";
import IconGames from "@assets/icons/goals.png";
import IconEntertainment from "@assets/icons/millionaire.png";

function SavingsStyles() {
	return (
		<SavingsContainer>
			<SavingsItem>
				<SavingsIcon src={IconTrip} />
				<SavingsAmount>$2250</SavingsAmount>
				<SavingsGoal>Summer Trip</SavingsGoal>
			</SavingsItem>
			<SavingsItem>
				<SavingsIcon src={IconGames} />
				<SavingsAmount>$300</SavingsAmount>
				<SavingsGoal>Gaming</SavingsGoal>
			</SavingsItem>
			<SavingsItem>
				<SavingsIcon src={IconEntertainment} />
				<SavingsAmount>$880</SavingsAmount>
				<SavingsGoal>Entertainment</SavingsGoal>
			</SavingsItem>
		</SavingsContainer>
	);
}

export default SavingsStyles;