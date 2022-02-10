// luisoviedo tt test1
//
/*
Given an array of positive integers representing 
the values of coins in your possession, write a function that returns the 
minimum amount of change (the minimum sum of money) that you CANNOT create

*/

coins = [5, 7, 1, 1, 2, 3, 22];
coins1 = [1, 1, 1, 1, 1];
coins2 = [1, 5, 1, 1, 1, 10, 15, 20, 100];

function testcoins(coins) {

    //sort the array with a lambda expression, key step for the solution.
    coins = coins.sort((a,b) => a-b)
    
    //console.log(coins);
    //var for the max change possible
    let max_sum = 0;

    //loop through the array
    for (act_val of coins) {
        //if the sum of previous coins: max_val plus 1 is greater than the actual coin we have, we keep summing until the less sum of coins is maxl_val +1
        if (act_val > max_sum +1){ return max_sum+1}
        max_sum += act_val; 
    }
    return max_sum;
}

console.log(testcoins(coins))
console.log(testcoins(coins1))
console.log(testcoins(coins2))