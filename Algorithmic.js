function findSumFactors(num){
    let result = []
    for(let i = num; i > 0; i--){
        let row = []
        let state = 0
        for(let j = i; j > 0; j--){
            while(state < num){
                if(state + j <= num){
                    state += j
                    row.push(j)
                } else if (state + j > num){
                    break
                }
            }
            if(state === num){
                break
            }
        }
        result.push(row)      
    }
    return result
}