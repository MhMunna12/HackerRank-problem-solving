
function simpleArraySum(ar){
    let sum = 0;
    // using for loop
    // for (let i = 0; i < ar.length; i++) {
    //     const element = ar[i];
    //     sum = sum + element;
    // }

    //using forEach
    // ar.forEach(element => sum += element);
    //console.log(sum);

    //using reduce
    const total = ar.reduce((preValue, curValue) => preValue + curValue,0)
    console.log(total);
}
const numbers = [1, 3, 5, 7, 8, 10]
simpleArraySum(numbers)