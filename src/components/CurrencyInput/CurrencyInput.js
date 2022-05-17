import PropTypes from 'prop-types';
import {CurrencyInputContainer, CurrencyInputStyled, CurrencySelectorStyled} from "./CurrencyInput.styles";

function CurrencyInput(props) {

    return (
        <CurrencyInputContainer>
            <CurrencyInputStyled type="text" value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
            <CurrencySelectorStyled value={props.currency || "NONE"} onChange={e => props.onCurrencyChange(e.target.value)}>
                {props.currencies?.map(currency => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </CurrencySelectorStyled>
        </CurrencyInputContainer>
    );
}


CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func
};

export default CurrencyInput;