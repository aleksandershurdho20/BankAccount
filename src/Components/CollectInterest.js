import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collectInterest } from '../actions/BankingActions'
export default function CollectInterest() {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const displayData = useSelector((state) => state)



    const handleInteres = () => {
        let dati = dispatch({ type: 'COLLECT_INTEREST' });
        // console.log(collectInterest(), 'collect')


    }

    let data = localStorage.getItem('storedBankData')
    console.log('data here')
    return (
        <div className="container">
            <h1 class="display-4">Interesi ktu {displayData}</h1>

            <button className="btn btn-primary" onClick={handleInteres} >Withdraw</button>
        </div>
    )
}
