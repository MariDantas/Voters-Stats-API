/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    console.log(ages);
    let count = 0;

    ages.forEach(function(age){
        if (age >= 18){
            count++;
        }
    })

    return count;
}