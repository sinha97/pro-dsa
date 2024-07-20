function minCoin(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return -1

    let minsCoinCount = Infinity

    for (const coin of coins) {
        const result = minCoin(coins, amount - coin, memo)
        if (result != -1) {
            minsCoinCount = Math.min(minsCoinCount, result + 1)
        }
    }

    // for(const coin of coins){
    //     let recentCoin = 1+minCoin(coins,amount-coin,memo)
    //     minsCoinCount=math.min(recentCoin,minsCoinCount)
    // }

    memo[amount] = minsCoinCount === Infinity ? -1 : minsCoinCount
    return memo[amount]
}