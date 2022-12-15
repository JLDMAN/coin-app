import React from 'react';
import Search from '../quickSearchPage/searchPage';
import Tracker from '../trendsPage/tracker';

function List() {

    const list = [
        { label: "All", value: "", key: "KId1"},
        { label: "Bitcoin", value: "bitcoin", key: "KId2"},
        { label: "Ergo", value: "ergo", key: "KId3"},
        { label: "Cardano", value: "cardano", key: "KId4"},
        { label: "Illuvium", value: "illuvium", key: "KId5"},
        { label: "Ethereum", value: "ethereum", key: "KId6"},
        { label: "Ravencoin", value: "ravencoin", key: "KId7"},
        { label: "Litecoin", value: "litecoin", key: "KId8"},
        { label: "Polkadot", value: "polkadot", key: "KId9"},
        { label: "Solana", value: "solana", key: "KId10"},
        { label: "Monero", value: "monero", key: "KId11"},
        { label: "Cronos", value: "crypto-com-chain", key: "KId12"}, 
        { label: "Binance Coin", value: "binancecoin", key: "KId13"},
        { label: "Tether", value: "tether", key: "KId14"},
        { label: "Ripple", value: "ripple", key: "KId15"},
        { label: "Dodge", value: "dogecoin", key: "KId16"},
        { label: "Tron", value: "tron", key: "KId17"},
        { label: "Dai", value: "dai", key: "KId17"}
    ];

    console.log(list.value);

    return (
        <div>
            <div>
                <Tracker list={list.value}/>
            </div>
            <div>
                <Search props={list.value}/>
            </div>
        </div>
    )
}

export default List;