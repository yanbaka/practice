// let count = 0;
// for(let i = 1; i < 51; i++){
//     // count += 1;
//     count ++;
//     if (count === 10) {
//         console.log(count)
//         count = 0;
//     }
// }

for(let i = 1; i < 51; i++){
    let n = i % 4;
    if (n === 0) {
        console.log(i);
    }
    console.log(i + ':' + n)
}