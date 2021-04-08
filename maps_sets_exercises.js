//1
//[1,2,3,4]

//2
//"ref"

//3
/*{
    0: {Array(3) => true},
    1: {Array(3) => false}
}
*/

//4
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//5
const vowelCount = fullStr => {
   const vowelMap = new Map();
   const str = fullStr.toLowerCase();
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ) {
            if (!vowelMap.has(char)){
                vowelMap.set(char, 1)
            }
            else {
                vowelMap.set(char, vowelMap.get(char) + 1);
            }
        }
    }
   return vowelMap;
}