/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    let count = 0;

    ages.forEach(function(age){
        if (age >= 18){
            count++;
        }
    })

    return count;
}
