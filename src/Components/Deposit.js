import React, { useState } from 'react'
import { BLACK_COLOR } from '../common/Colors'
import { useDispatch } from 'react-redux'
export default function Deposit() {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()
    const handleDeposit = () => {
        console.log('hi')
        dispatch({ type: "DEPOSIT", amount: parseInt(amount) })
    }
    return (
        <div className="container">
            <h1 class="display-4">Enter your amount to deposit</h1>
            <input type="text"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleDeposit} color={BLACK_COLOR}>Deposit</button>
        </div>
    )
}
