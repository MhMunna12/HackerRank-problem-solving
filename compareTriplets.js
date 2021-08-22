function compareTriplets(a, b){
    let aCount = 0;
    let bCount = 0;
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i], b[i])
        if (a[i]> b[i]) {
            aCount ++;
        }
        if(b[i]> a[i]){
            bCount ++;
        }
        
    }
    return [aCount, bCount]
}
const arr1 = [2,5,8, 7]
const arr2 = [1,5,9, 6]
compareTriplets(arr1, arr2)