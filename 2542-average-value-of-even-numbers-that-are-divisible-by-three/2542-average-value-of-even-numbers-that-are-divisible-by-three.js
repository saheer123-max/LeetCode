var averageValue = function(nums) {
    let sum = 0, count = 0;

    for (let num of nums) {
        if (num % 2 === 0 && num % 3 === 0) {  // Check if even & divisible by 3
            sum += num;
            count++;
        }
    }

    return count === 0 ? 0 : Math.floor(sum / count); // Return average rounded down
};
