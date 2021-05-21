// checkYuGiOh task
function checkYuGiOh(n) {
    let parsedNum;
    if(!Array.isArray(n)){
       parsedNum = parseInt(n)
    }
    if (isNaN(parsedNum) || parsedNum === 0) {
       console.log(`invalid parameter: ${JSON.stringify(n)}`);
       return(`invalid parameter: ${JSON.stringify(n)}`);
    }
    let arr = Array.from({length: n}, (_, i) => i + 1);
    let results = []
    for(let i = 0; i < arr.length; i++){
       if((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
          results.push("yu-gi-oh")
 
       }else if ((arr[i] % 2 === 0) && (arr[i] % 3 === 0)){
          results.push("yu-gi")
       }else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)){
          results.push("yu-oh")
 
       }else if ((arr[i] % 2 === 0) && (arr[i] % 5 === 0)){
          results.push("gi-oh")
       }else if (arr[i] % 2 === 0){
          results.push("yu")   
       }else if (arr[i] % 3 === 0) {
          results.push("gi")
       }else if(arr[i] % 5 === 0) {
          results.push("oh")
       }else {
          results.push(arr[i])
       }  
    }
    console.log(results)
    return
 }

 checkYuGiOh(2)
 checkYuGiOh(3)
 checkYuGiOh("fizbuzz is meh")
 checkYuGiOh(10)
