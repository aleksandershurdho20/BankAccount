import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collectInterest } from '../actions/BankingActions'
export default function CollectInterest() {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const displayData = useSelector((state) => state)


    const handleInteres = () => {
        dispatch(collectInterest());
        console.log("done")


    }
    let data = localStorage.getItem('storedBankData')
    console.log('data here')
    return (
        <div className="container">
            <h1 class="display-4">Interesi ktu {data}</h1>

            <button className="btn btn-primary" onClick={handleInteres} >Withdraw</button>
        </div>
    )
}
