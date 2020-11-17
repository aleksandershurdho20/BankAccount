const deposit = (amount) => {
    return {
        type: "DEPOSIT", amount: parseInt(amount)
    }
}
const Withdraw = (amount) => {
    return {
        type: "WITHDRAW", amount: parseInt(amount)
    }
}
const collectInterest = () => {
    return {
        type: 'COLLECT_INTEREST'
    };

}
const Delete = () => {
    return {
        type: 'DELETE'
    };


}