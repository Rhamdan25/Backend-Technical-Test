function checkPrime(num) {
    let result = []
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
          result.push(num / i)
        }    
    }
    if (result.length === 2) {
        return true
    } else {
        return false
    }
  }

function getPrime(num){
    let result = []
    for (let i = 1; i <= num; i++){
        if(checkPrime(i)){
            result.push(i)
        }
    }
    return result
}