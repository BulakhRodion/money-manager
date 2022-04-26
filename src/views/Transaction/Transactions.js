import React, {useEffect, useState} from 'react';
import {TransactionsContainer} from "./Transactions.styles";
// import {getCurrencies} from "../../utils/helpers/api";
import axios from "axios";


function Transactions(props) {

    const [currencies, setCurrencies] = useState([]);

    const getCurrencies = () => {
         axios.get(`https://api.monobank.ua/bank/currency`)
            .then(res => {
                setCurrencies(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // useEffect( () => {
    //     getCurrencies;
    // }, []);

    return (
        <TransactionsContainer>
            Transaction Page
            <button onClick={getCurrencies}>Get Currencies</button>
            {currencies.map((currency, index) => {
                return (
                    <div key={index}>
                        {currency.currencyCodeA} {currency.currencyCodeB}
                    </div>
                )
            })}
        </TransactionsContainer>
    );
}

export default Transactions;