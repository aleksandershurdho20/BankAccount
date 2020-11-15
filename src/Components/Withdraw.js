import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Withdraw() {
    const displayData = useSelector((state) => state)
    const local_storage_key = "storedBankData"
    const [amount, setAmount] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const storedBankData = JSON.parse(localStorage.getItem(local_storage_key))
        setAmount(storedBankData)
    }, [])
    useEffect(() => {
        localStorage.setItem(local_storage_key, JSON.stringify(amount))
    }, [amount])
    const handleWithdraw = () => {
        dispatch({ type: "WITHDRAW", amount: parseInt(amount) })
    }

    console.log(displayData, 'displayData')

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
