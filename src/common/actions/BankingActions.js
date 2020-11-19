export const deposit = (amount) => {
    return {
        type: "DEPOSIT", amount: parseInt(amount)
    }
}
export const Withdraw = (amount) => {
    return {
        type: "WITHDRAW", amount: parseInt(amount)
    }
}
export const collectInterest = () => {
    return {
        type: 'COLLECT_INTEREST'
    };

}


export const Delete = () => {
    return {
        type: 'DELETE'
    };


}