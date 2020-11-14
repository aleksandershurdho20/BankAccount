import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Withdraw() {
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()

    const handleWithdraw = () => {
        dispatch({ type: "WITHDRAW", amount: parseInt(amount) })

    }
    return (
        <div className="container">
            <h1 class="display-4">Enter your amount to withdraw</h1>
            <input type="text"
                className="form-control"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleWithdraw} >Withdraw</button>
        </div>
    )
}
