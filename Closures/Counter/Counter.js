const createCounter = (n) =>{
    
    return () =>{
        const result = n;
        n++;
        return result;
    }
}

// Alternatively do:

// const createCounter = (n) =>{
    
//     return () =>{
//         return n++;
//     }
// }