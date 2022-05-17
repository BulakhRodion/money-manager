import React, {useEffect, useState} from 'react';
import {ConverterContainer, NumError, TransactionsContainer} from "./Exchange.styles";
import CurrencyInput from "../../components/CurrencyInput/CurrencyInput";
import {RATES_LIST} from "../../utils/helpers/constants";
import axios from "axios";


function Exchange() {

    const mainCurrency = 'USD';

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');
    const [rates, setRates] = useState([]);
    const [isNum, setIsNum] = useState(false);

    useEffect( () => {
        axios.get(`${process.env.REACT_APP_FIXER_BASEURL}symbols=${RATES_LIST}&base=${mainCurrency}`,  {
            headers: {
                "apikey": process.env.REACT_APP_FIXER_APIKEY,
            }
        })
            .then(response => {
                setRates(response.data?.rates);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect( () => {
        if(!!rates) {
            handleAmount1Change(1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rates]);

    function formatValue(value) {
        return value.toFixed(4);
    }

    function handleAmount1Change(amount1) {
        if(isNaN(amount1)) {
            setIsNum(true)
            return;
        } else if(amount1 < 0) {
            setIsNum(true)
            return;
        } else {
            setIsNum(false);
        }
        setAmount2(formatValue(amount1 * rates[currency2] / rates[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        if(isNaN(amount2) || isNaN(amount1)) {
            setIsNum(true)
            return;
        } else if(amount2 < 0 || amount1 < 0) {
            setIsNum(true)
            return;
        } else {
            setIsNum(false);
        }
        setAmount2(formatValue(amount1 * rates[currency2] / rates[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        if(isNaN(amount2)) {
            setIsNum(true)
            return;
        } else if(amount2 < 0) {
            setIsNum(true)
            return;
        } else {
            setIsNum(false);
        }
        setAmount1(formatValue(amount2 * rates[currency1] / rates[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        if(isNaN(amount2) || isNaN(amount1)) {
            setIsNum(true)
            return;
        } else if(amount2 < 0 || amount1 < 0) {
            setIsNum(true)
            return;
        } else {
            setIsNum(false);
        }
        setAmount1(formatValue(amount2 * rates[currency1] / rates[currency2]));
        setCurrency2(currency2);
    }

    return (
        <TransactionsContainer>
            <ConverterContainer>
                <CurrencyInput currencies={Object.keys(rates)} amount={amount1} currency={currency1} onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change}/>
                <CurrencyInput currencies={Object.keys(rates)} amount={amount2} currency={currency2} onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change}/>
                {
                    isNum && <NumError>Only positive numbers are allowed</NumError>
                }
            </ConverterContainer>
        </TransactionsContainer>
    );
}

export default Exchange;