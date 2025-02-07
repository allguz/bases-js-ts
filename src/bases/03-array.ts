
const numeriArray: number[] = [1,2,3,4,5];
numeriArray.push(6);



const numeriArray3 = numeriArray.map((value) => {
    return value +1;
    })

console.log(numeriArray);
console.log(numeriArray3);