function descendingOrder(n){
    //     1) make integer into an array
        const myArray = n.toString().split('').map(Number)
    //     2) sort array of numbers and convert to a string
        const sortedArray = myArray.sort().reverse().join("")
    //     3) return string value, converted back to an integer
        return parseInt(sortedArray)
    }