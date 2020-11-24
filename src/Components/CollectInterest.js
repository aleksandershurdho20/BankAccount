import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collectInterest } from '../actions/BankingActions'
export default function CollectInterest({ handleInteres, displayData }) {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()





    let data = localStorage.getItem('storedBankData')
    console.log('data here')
    return (
        <div className="container">
            <div class="card mt-5 mb-5">
                <h5 class="card-header">Collect Interest</h5>
                <div class="card-body">
                    <h5 class="card-title">Total Interes</h5>
                    <p class="card-text">{displayData}</p>
                    <a href="#" class="btn btn-primary" onClick={handleInteres}>Collect</a>
                </div>
            </div>

        </div>
    )
}
