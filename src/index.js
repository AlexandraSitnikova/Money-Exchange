
module.exports = function makeExchange(currency) {
    if(currency <= 0) {
        return {};
    } else if(currency > 10000) {
        let errObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return errObj;
    } else {
        let coins = [50, 25, 10, 5, 1];
        let units = ["H", "Q", "D", "N", "P"];
        let amounts = [0, 0 ,0, 0, 0];

        coins.forEach(function(coin, index) {
            while(currency >= coin) {
                amounts[index]++;
                currency -= coin;
            };
        });
        
        let resObj = {};
        amounts.forEach(function(amount, index) {
            if(amount !== 0) {
                resObj[units[index]] = amount;
            }
        });

        return resObj;
    }
}
