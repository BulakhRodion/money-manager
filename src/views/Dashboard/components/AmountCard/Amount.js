import React from 'react';
import {AmountContainer, AmountItem, AmountItemTitle} from "./Amount.styles";

function Amount() {
	return (
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
	);
}

export default Amount;