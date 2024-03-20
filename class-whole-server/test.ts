4/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// const convert = function(s, numRows) {
//     const rows = new Array(numRows).fill([]);
//
//     let isDescending = false;
//
//     s.split('').forEach((character, index) => {
//         const v = index % (numRows - 1);
//         let rowIndex: number;
//
//         if (v > 0) {
//             rowIndex = !isDescending ? (numRows - 1 - v) : v
//         } else {
//             rowIndex = isDescending ? (numRows - 1) : 0;
//         }
//         rows[rowIndex].push(character)
//         if(v === 0){
//             isDescending = !isDescending;
//         }
//
//     })
//     console.log(rows);
// };


const convert = function(s, numRows) {
    const rows = new Array(numRows);
    let isDescending = false;

    for(let index = 0; index < s.length; index++){
        const extreme = index % (numRows - 1);
        let rowIndex;

        extreme > 0 ?
            rowIndex = !isDescending ? (numRows - 1 - extreme) : extreme
            :
            rowIndex = isDescending ? (numRows - 1) : 0;


        rows[rowIndex] ? rows[rowIndex].push(s[index]) : (rows[rowIndex] = [s[index]]);


        if(extreme === 0){
            isDescending = !isDescending;
        }
    }

    return [].concat(...rows).join('');

    };
convert('PAYPALISHIRING', 3)


