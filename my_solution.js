function alternate(arr){
    if(!arr || !arr.length) return [];
    
    const highestI = arr.indexOf(Math.max(...arr));
    // new array [1, 5, 3, 2, 6]
    [arr[highestI], arr[arr.length - 1]] = [arr[arr.length - 1], arr[highestI]];
    
    let flag = true; //i was the bigger number  
    for(let i = arr.length - 1; i > 0; i--){
        if(flag){ // this means right needs to be bigger
            if(arr[i] < arr[i-1]){
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
            }
        }
        if(!flag){ // this means right needs to be smaller
            if(arr[i] > arr[i-1]) {
                [arr[i], arr[i-1]] = [arr[i-1], arr[i]]
            }
        }
        flag = !flag
    }    
    return arr;
}

// Test
console.log(alternate([1, 5, 6, 2, 3]))
console.log(alternate([]));
console.log(alternate(null));
